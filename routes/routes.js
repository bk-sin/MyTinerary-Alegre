const Router = require("express").Router()
const citiesControllers = require("../controllers/citiesControllers")
const {readCity, readCities} = citiesControllers

Router.route("/cities").get(readCities)

Router.route("/city/:id").get(readCity)

module.exports = Router
