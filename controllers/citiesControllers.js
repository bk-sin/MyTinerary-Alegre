const cities = [
  {
    id: 0,
    name: "Argentina",
    src: "../../assets/argentina.jpg",
  },
  {
    id: 1,
    name: "India",
    src: "../../assets/india.jpg",
  },
  {
    id: 2,
    name: "Indonesia",
    src: "../../assets/indonesia.jpg",
  },
  {
    id: 3,
    name: "Italy",
    src: "../../assets/italy.jpg",
  },
  {
    id: 4,
    name: "Japan",
    src: "../../assets/japan.jpg",
  },
  {
    id: 5,
    name: "Mexico",
    src: "../../assets/mexico.jpg",
  },
  {
    id: 6,
    name: "Spain",
    src: "../../assets/spain.jpg",
  },
  {
    id: 7,
    name: "South Africa",
    src: "../../assets/sudafrica.jpg",
  },
  {
    id: 8,
    name: "Thailand",
    src: "../../assets/tailandia.jpg",
  },
  {
    id: 9,
    name: "United States",
    src: "../../assets/usa.jpg",
  },
  {
    id: 10,
    name: "Vietnam",
    src: "../../assets/vietnam.jpg",
  },
  {
    id: 11,
    name: "Russia",
    src: "../../assets/russia.jpg",
  },
]

const citiesControllers = {
  readCities: (req, res) => {
    res.json({response: {cities}})
  },
  readCity: (req, res) => {
    const city = cities.find((city) => city.id.toString() === req.params.id)
    res.json({response: {city}})
  },
}

module.exports = citiesControllers
