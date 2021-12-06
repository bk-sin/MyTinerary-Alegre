const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {
  readItineraries: (req, res) => {
    Itinerary.find()
      .populate("city")
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.log(err))
  },
  readItinerariesByCity: (req, res) => {
    Itinerary.find({city: {_id: req.params.city}})
      .populate("city")
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.log(err))
  },
  readItinerary: (req, res) => {
    Itinerary.findOne({_id: req.params.id})
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.log(err))
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
      .catch((err) => console.log(err))
  },
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
      .then((response) => res.json({response}))
      .catch((err) => console.log(err))
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndRemove({_id: req.params.id})
      .then((response) => res.json({response}))
      .catch((err) => console.log(err))
  },
}

module.exports = itinerariesControllers
