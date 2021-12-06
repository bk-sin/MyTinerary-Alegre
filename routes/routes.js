const Router = require("express").Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
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

Router.route("/cities").get(readCities).post(createCity)

Router.route("/city/:id").get(readCity).put(modifyCity).delete(deleteCity)

Router.route("/itineraries").get(readItineraries).post(createItinerary)

Router.route("/itinerary/:id")
  .get(readItinerary)
  .put(modifyItinerary)
  .delete(deleteItinerary)

Router.route("/itineraries/:city").get(readItinerariesByCity)

module.exports = Router
