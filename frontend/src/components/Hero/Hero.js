import "./Hero.css"
import {Button, Container, Row} from "react-bootstrap"
import {useLayoutEffect} from "react"
import nube from "../../assets/nube.png"
import palmera from "../../assets/palmera.png"
import {Link} from "react-router-dom"
import {gsap} from "gsap"

export default function Hero() {
  const timeline = gsap.timeline()

  useLayoutEffect(() => {
    const stagger = document.querySelectorAll(".stagger")

    const palmera = document.querySelector(".palmera")
    const nube1 = document.querySelector(".nube1")
    const nube2 = document.querySelector(".nube2")
    const brillo = document.querySelector(".brillo")

    gsap.from(palmera, {opacity: 0, y: 600, duration: 0.5})
    gsap.from(nube1, {opacity: 0, x: 500, duration: 1}, "-=0.1")
    gsap.from(nube2, {opacity: 0, x: -500, duration: 1})
    gsap.from(brillo, {opacity: 0, y: -600, duration: 1}, "+=0")
    timeline.to(
      stagger,
      {
        opacity: 1,
        y: 20,
        duration: 1,
        stagger: 0.5,
      },
      "+=2"
    )
  })
  return (
    <>
      <Container fluid id="hero">
        <Container>
          <Row>
            <div className="welcomeMessage">
              <h1 className="welcomeTitle stagger">Find your perfect trip</h1>
              <p className="stagger">
                designed by insiders who know and love their cities!
              </p>
              <Button
                as={Link}
                to="/cities"
                className="btnCallToAction stagger"
              >
                Choose your dream destination
              </Button>
            </div>
            <div className="palmeraPadre">
              <div className="brillo"></div>
              <img className="palmera" src={palmera} alt="palmera"></img>
              <img className="nube1" src={nube} alt="palmera"></img>
              <img className="nube2" src={nube} alt="palmera"></img>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}
