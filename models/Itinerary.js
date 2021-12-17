const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: {type: String, required: true},
  src: {type: String, required: true},
  price: {type: Number, required: true},
  duration: {type: Number, required: true},
  likes: {type: []},
  hashtags: {type: [], required: true},
  comments: [
    {
      comment: {type: String, required: true},
      userID: {type: mongoose.Types.ObjectId, required: true, ref: "user"},
    },
  ],
  city: {type: mongoose.Types.ObjectId, ref: "city"},
})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary
