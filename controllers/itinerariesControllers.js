const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {
  readItineraries: (req, res) => {
    Itinerary.find()
      .populate("city")
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.error(err))
  },
  readItinerariesByCity: (req, res) => {
    Itinerary.find({city: {_id: req.params.city}})
      .populate("city")
      .populate("comments.userID")
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.error(err))
  },
  readItinerary: (req, res) => {
    Itinerary.findOne({_id: req.params.id})
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.error(err))
  },
  createItinerary: (req, res) => {
    const {name, title, src, price, duration, likes, hashtags, comments} =
      req.body
    const itinerary = new Itinerary({
      name,
      title,
      src,
      price,
      duration,
      likes,
      hashtags,
      comments,
    })
      .save()
      .then((response) => res.json({response: {itinerary}}))
      .catch((err) => console.error(err))
  },
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
      .then((response) => res.json({response}))
      .catch((err) => console.error(err))
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndRemove({_id: req.params.id})
      .then((response) => res.json({response}))
      .catch((err) => console.error(err))
  },
  like: async (req, res) => {
    const itinerarios = await Itinerary.find()
    const itinerario = await Itinerary.findOne({
      _id: req.body.itineraryID,
    }).lean()
    const likeExist = itinerario.likes.some(
      (itinerary) => itinerary.toString() === req.body.userID.toString()
    )
    const action = !likeExist ? "$push" : "$pull"
    Itinerary.findByIdAndUpdate(
      req.body.itineraryID,
      {
        [action]: {likes: req.body.userID},
      },

      {new: true}
    )
      .lean()
      .then((response) => {
        res.json({response: itinerarios})
      })
      .catch((err) => {
        console.error(err)
      })
  },

  postComment: async (req, res) => {
    const comment = req.body.comment
    const userID = req.user._id
    const itineraryID = req.body.itineraryID
    try {
      let cambiado = await Itinerary.findOneAndUpdate(
        {_id: itineraryID},
        {$push: {comments: {comment, userID}}},
        {new: true}
      )

      let all = await Itinerary.find({city: {_id: req.body.city_id}}).populate(
        "comments.userID"
      )
      res.json({success: true, response: all})
    } catch {
      console.log(err)
      res.json({success: false, response: err})
    }
  },
  delOrEditComment: async (req, res) => {
    const commentID = req.body.commentID
    const edit = req.body.edit
    const itineraryID = req.body.itineraryID
    const type = req.body.type

    if (type === "DEL") {
      Itinerary.updateOne(
        {
          _id: itineraryID,
        },
        {
          $pull: {
            comments: {
              _id: commentID,
            },
          },
        },
        {new: true}
      )
        .populate("comments.user")
        .then((response) => {
          res.json({success: true, response: response})
        })
        .catch((err) => {
          res.json({success: false, response: err})
        })
    } else if (type === "MOD") {
      Itinerary.updateOne(
        {
          _id: itineraryID,
          "comments._id": commentID,
        },
        {
          "comments.$.comment": edit,
        },
        {new: true}
      )
        .populate("comments.user")
        .then((response) => {
          res.json({success: true, response: response})
        })
        .catch((err) => {
          res.json({success: false, response: err})
        })
    } else {
      res.json({success: false, response: "Bad type"})
    }
  },
}

module.exports = itinerariesControllers
