const Router = require("express").Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
const authControllers = require("../controllers/authControllers")
const validator = require("../config/validator")
const passport = require("../config/passport")
const {readCity, readCities, createCity, deleteCity, modifyCity} =
  citiesControllers

const {
  readItineraries,
  readItinerary,
  createItinerary,
  deleteItinerary,
  modifyItinerary,
  readItinerariesByCity,
} = itinerariesControllers

const {signupUser, signinUser, readUsers, token} = authControllers
Router.route("/cities").get(readCities).post(createCity)

Router.route("/city/:id").get(readCity).put(modifyCity).delete(deleteCity)

Router.route("/itineraries").get(readItineraries).post(createItinerary)

Router.route("/itinerary/:id")
  .get(readItinerary)
  .put(modifyItinerary)
  .delete(deleteItinerary)

Router.route("/itineraries/:city").get(readItinerariesByCity)

Router.route("/auth/signup").post(validator, signupUser)
Router.route("/auth/signin").post(signinUser)
Router.route("/auth/getusers").get(readUsers)

Router.route("/auth").get(passport.authenticate("jwt", {session: false}), token)

module.exports = Router
