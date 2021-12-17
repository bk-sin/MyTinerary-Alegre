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
      .lean()
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
    const id = req.body.itineraryID
    const itinerario = await Itinerary.findOne({_id: id}).lean()
    const likeExist = itinerario.likes.some(
      (itinerary) => itinerary.toString() === req.body.userID.toString()
    )

    if (!likeExist) {
      Itinerary.findByIdAndUpdate(
        id,
        {
          $push: {likes: req.body.userID},
        },

        {new: true}
      )
        .lean()
        .then((response) => {
          res.json({response: response})
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      Itinerary.findByIdAndUpdate(
        id,
        {
          $pull: {likes: req.body.userID},
        },
        {new: true}
      )
        .lean()
        .then((response) => {
          res.json({response: response})
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  getComments: async (req, res) => {
    Itinerary.findById(req.body.itineraryID)
      .then((response) => {
        res.json({response: response})
      })
      .catch((err) => {
        console.error(err)
      })
  },
  postComment: async (req, res) => {
    const comment = req.body.comment
    const userID = req.body.userID
    console.log(userID)
    const itineraryID = req.body.itineraryID

    Itinerary.findOneAndUpdate(
      {_id: itineraryID},
      {$push: {comments: {comment, userID}}},
      {new: true}
    )
      .populate("comments.userID")
      .then((response) => {
        res.json({success: true, response: response})
      })
      .catch((err) => {
        console.log(err)
        res.json({success: false, response: err})
      })
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
        },
        {
          $set: {
            comments: {
              comment: edit,
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
    } else {
      res.json({success: false, response: "Bad type"})
    }
  },
}

module.exports = itinerariesControllers
