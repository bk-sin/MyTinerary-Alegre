import "./CityCards.css"
import {Link} from "react-router-dom"
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

  const filtered = cities.filter((city) =>
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
        <div class="cartas">
          {filtered > 0 ? (
            filtered.map((city, index) => (
              <Link className="cartalink" to={`/city/${city._id}`}>
                <div
                  class={`carta ${
                    index === 5 || index === 10 ? "paddtop" : ""
                  }`}
                  style={{backgroundImage: "url(" + city.src + ")"}}
                >
                  <div class="carta-content">
                    <h2 class="carta-title">{city.name}</h2>
                    {/* <p class="card-body">{city.description}</p> */}
                    <Link to={`/city/${city._id}`} class="boton">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </Container>
    </Container>
  )
}
