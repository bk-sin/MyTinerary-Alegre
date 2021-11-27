const City = require("../models/City")

const citiesControllers = {
  readCities: (req, res) => {
    const cities = City.find().then((response) => {
      res.json({response})
      console.log(response)
    })
  },
  readCity: (req, res) => {
    console.log(req.params.id)
    const city = cities.find((city) => city.id.toString() === req.params.id)
    console.log(city)
    res.json({response: {city}})
  },
  createCity: (req, res) => {
    const {name, src, description, _id} = req.body
    const city = new City({name, src, description, _id})
      .save()
      .then((response) => {
        res.json({response: {city}})
        console.log(response)
      })
  },
}

module.exports = citiesControllers
