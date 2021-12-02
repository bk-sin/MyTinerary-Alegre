const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({
  name: {type: String, required: true},
  src: {type: String, required: true},
  price: {type: Number, required: true},
  duration: {type: Number, required: true},
  likes: {type: Number, default: 0, required: true},
  hashtags: {type: [], required: true},
  comments: {type: []},
})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary
