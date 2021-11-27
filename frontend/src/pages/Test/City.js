import {Card, Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import axios from "axios"
import React, {useEffect, useState} from "react"
import "./Test.css"

export default function City() {
  const [city, setCity] = useState([])

  const params = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/city/" + params.id)
      .then((response) => {
        setCity(response.data.response.city)
      })
  }, [])
  return (
    <Container fluid className="bg">
      <Container
        className="test gap-4 justify-content-center flex-column
      "
      >
        <Card border="dark" className="text-white card">
          <Card.Img className="card-img" src={city.src} alt={city.name} />
          <Card.ImgOverlay>
            <Card.Title className="txt-dark txt-title">{city.name}</Card.Title>
            <Card.Text className="txt-dark txt-description">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <h3>Under Construction</h3>
        <Link to="/test"> Volver </Link>
      </Container>
    </Container>
  )
}
