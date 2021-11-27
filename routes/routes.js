const Router = require("express").Router()
const citiesControllers = require("../controllers/citiesControllers")
const {readCity, readCities, createCity} = citiesControllers

Router.route("/cities").get(readCities).post(createCity)

Router.route("/city/:id").get(readCity)

module.exports = Router
