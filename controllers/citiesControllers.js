const City = require("../models/City")

const citiesControllers = {
  readCities: (req, res) => {
    const cities = City.find().then((response) => {
      res.json({response})
    })
  },
  readCity: (req, res) => {
    const city = City.findOne({_id: req.params.id}).then((response) => {
      res.json({response})
    })
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
