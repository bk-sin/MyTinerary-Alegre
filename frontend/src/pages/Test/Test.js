import "./Test.css"
import TestChild from "./TestChild"
import {Container} from "react-bootstrap"
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

export default function Test() {
  const params = useParams()
  const [cities, setCities] = useState([])

  console.log(params)

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((data) => {
      setCities(data.data.response.cities)
    })
  }, [])

  return (
    <Container fluid className="bg">
      <Container className="test gap-4 justify-content-center">
        {cities.map((city, index) => (
          <TestChild name={city.name} src={city.src} id={city.id} />
        ))}
      </Container>
    </Container>
  )
}
