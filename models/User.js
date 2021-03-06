const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  photo: {type: String, required: true},
  country: {type: String, required: true},
  google: {type: Boolean, default: false},
  likes: [{type: mongoose.Types.ObjectId, ref: "itinerary"}],
})

const User = mongoose.model("user", userSchema)

module.exports = User
