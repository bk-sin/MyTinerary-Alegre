import React, {useEffect, useState} from "react"
import "./Carousel.css"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"
import {Card, Container} from "react-bootstrap"
import axios from "axios"

export default function Carousel() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((response) => {
        setCities(response.data.response)
        console.log(response.data.response)
        console.log(cities)
      })
      .catch((err) => console.error(err.message))
  }, [])

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 4,
          dots: false,
          arrows: false,
        },
      },
    ],
  }
  return (
    <Container fluid className="bg ">
      <Container>
        <h1>Popular MyTineraries</h1>
        <Slider {...settings}>
          {cities.length > 0 ? (
            cities.map((city) => {
              return (
                <div key={city.id}>
                  <Card className="m-2 card-carousel p-2">
                    <Card.Img
                      variant="top"
                      className="img-carousel"
                      src={`${city.src}`}
                    />
                    <Card.Body className="p-0">
                      <Card.Title className="text-center textcard">{`${city.name}`}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </Slider>
      </Container>
    </Container>
  )
}
