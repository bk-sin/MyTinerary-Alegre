const Router = require("express").Router()
const citiesControllers = require("../controllers/citiesControllers")
const {readCity, readCities, createCity, deleteCity, modifyCity} =
  citiesControllers

Router.route("/cities").get(readCities).post(createCity)

Router.route("/city/:id").get(readCity).put(modifyCity).delete(deleteCity)

module.exports = Router
