import {Card, Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import axios from "axios"
import React, {useEffect, useState} from "react"
import "./Test.css"
import {IoMdArrowRoundBack} from "react-icons/io"

export default function City() {
  const [city, setCity] = useState([])
  const back = {
    backgroundImage: "url(" + city.src + ")",
    width: "100%",
    height: "50vh",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
  }

  const params = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/city/" + params.id)
      .then((response) => {
        setCity(response.data.response)
      })
  }, [])

  return (
    <>
      <Container fluid className="bg centramelo" style={back}>
        <h1 className="h1back city">{city.name}</h1>
      </Container>
      <Container className="bg" fluid>
        <Container>
          <p className="description">{city.description}</p>
          <Link className="backbtn" to="/cities">
            {" "}
            <IoMdArrowRoundBack /> Back to Cities
          </Link>
        </Container>
        <h1 className="text-center under">Under construction</h1>
      </Container>
    </>
  )
}
