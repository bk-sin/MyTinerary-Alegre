import "./Test.css"
import TestChild from "./TestChild"
import {Container} from "react-bootstrap"
import React, {useEffect, useState} from "react"
import axios from "axios"

export default function Test() {
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
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search a City"
        name="s"
      />

      <Container className="test gap-4 justify-content-center">
        {filter.length > 0 ? (
          filter.map((city) => (
            <TestChild name={city.name} src={city.src} id={city._id} />
          ))
        ) : (
          <h1>No matching results!</h1>
        )}
      </Container>
    </Container>
  )
}
