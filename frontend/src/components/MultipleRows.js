import React, {Component} from "react"
import Slider from "react-slick"
import Imagenes from "./Imagenes"
import {Card} from "react-bootstrap"

export default class Multiple extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "5px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 2,
            dots: false,
            arrows: false,
          },
        },
      ],
    }
    return (
      <>
        <Slider {...settings}>
          {Imagenes.map((img, index) => {
            return (
              <div key={index}>
                <Card className="m-2 card-carousel p-2">
                  <Card.Img
                    variant="top"
                    className="img-carousel"
                    src={`${img.src}`}
                  />
                  <Card.Body className="bodycard p-0">
                    <Card.Title className="text-center textcard">{`${img.name}`}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </Slider>
      </>
    )
  }
}
