import React, {Component} from "react"
import Slider from "react-slick"
import Imagenes from "./Imagenes"
import {Card} from "react-bootstrap"

export default class Multiple extends Component {
  render() {
    /* const NextArrow = ({OnClick}) => {
      return <div className="arrow next" onClick={onClick}></div>
    } */
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img
              src={`${Imagenes[i + 3].src}`}
              alt={`${Imagenes[i + 3].name}`}
              className="thumCarou"
            />
          </a>
        )
      },
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "5px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      dotsClass: "slick-thumb",
    }
    return (
      <div>
        <Slider {...settings}>
          {Imagenes.map((img, index) => {
            return (
              <div key={index}>
                <Card className="m-2">
                  <Card.Img variant="top" src={`${img.src}`} />
                  <Card.Body>
                    <Card.Title>{`${img.name}`}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
