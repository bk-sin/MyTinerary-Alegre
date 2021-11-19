import "./Hero.css"
import {Button, Container, Row} from "react-bootstrap"
import nube from "../../assets/nube.png"
import palmera from "../../assets/palmera.png"

export default function Hero() {
  return (
    <>
      <Container fluid id="hero">
        <Container>
          <Row>
            <div className="welcomeMessage">
              <h1>Find your perfect trip</h1>
              <p>designed by insiders who know and love their cities!</p>
              <Button href="/cities" className="btnCallToAction">
                Choose your dream destination
              </Button>
            </div>
            <div className="palmeraPadre">
              <div className="brillo"></div>
              <img className="palmera " src={palmera} alt="palmera"></img>
              <img className="nube1 " src={nube} alt="palmera"></img>
              <img className="nube2 " src={nube} alt="palmera"></img>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}
