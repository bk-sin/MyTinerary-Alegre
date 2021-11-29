const City = require("../models/City")

const citiesControllers = {
  readCities: (req, res) => {
    City.find().then((response) => {
      res.json({response})
    })
  },
  readCity: (req, res) => {
    City.findOne({_id: req.params.id}).then((response) => {
      res.json({response})
    })
  },
  createCity: (req, res) => {
    const {name, src, description, country} = req.body
    const city = new City({name, src, description, country})
      .save()
      .then((response) => res.json({response: {city}}))
  },
  modifyCity: (req, res) => {
    City.findOneAndUpdate(
      {_id: req.params.id},
      {...req.body},
      {new: true}
    ).then((response) => res.json({response}))
  },
  deleteCity: (req, res) => {
    const updated = City.findOneAndRemove({_id: req.params.id}).then(
      (response) => res.json({response})
    )
  },
}

module.exports = citiesControllers
