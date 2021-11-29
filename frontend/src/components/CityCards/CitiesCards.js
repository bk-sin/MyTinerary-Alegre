import "./CityCards.css"
import CardCity from "./CardCity"
import {Container} from "react-bootstrap"
import React, {useEffect, useState} from "react"
import axios from "axios"

export default function CitiesCards() {
  const [cities, setCities] = useState([])
  const [search, setSearch] = useState([])
  const [min, setMin] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((response) => {
      setCities(response.data.response)
    })
  }, [])

  const filter = cities.filter((city) =>
    city.name.toLowerCase().startsWith(min)
  )

  return (
    <Container fluid className="bg ">
      <input
        className="SearchInput"
        onInput={(e) => {
          setMin(e.target.value.toLowerCase().trimStart().trimEnd())
          setSearch(e.target.value)
        }}
        value={search}
        type="text"
        id="header-search"
        placeholder="Search a City"
        name="s"
      />

      <Container className="test gap-4 justify-content-center">
        {filter.length > 0 ? (
          filter.map((city) => (
            <CardCity name={city.name} src={city.src} id={city._id} />
          ))
        ) : (
          <h1>No matching results!</h1>
        )}
      </Container>
    </Container>
  )
}
