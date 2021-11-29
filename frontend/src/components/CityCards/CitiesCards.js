import "./CityCards.css"
import CardCity from "./CardCity"
import {Container} from "react-bootstrap"
import React, {useEffect, useState} from "react"
import axios from "axios"

export default function CitiesCards() {
  const [cities, setCities] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((response) => {
      setCities(response.data.response)
    })
  }, [])

  const filter = cities.filter((city) =>
    city.name.toLowerCase().startsWith(search)
  )

  return (
    <Container fluid className="bg ">
      <input
        className="SearchInput"
        onInput={(e) =>
          setSearch(e.target.value.toLowerCase().trimStart().trimEnd())
        }
        type="text"
        placeholder="Search a City"
      />

      <Container className="test gap-4 justify-content-center">
        {filter.length > 0 ? (
          filter.map((city) => (
            <CardCity
              name={city.name}
              src={city.src}
              id={city._id}
              description={city.description}
            />
          ))
        ) : (
          <h1>No matching results!</h1>
        )}
      </Container>
    </Container>
  )
}
