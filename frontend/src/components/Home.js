import "../App.css"
import palmera from "../palmera.png"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import Navigation from "./Navigation"
import nube from "../image 1.png"
import MultipleRows from "./MultipleRows"
import Footer from "./Footer"
import Button from "react-bootstrap/Button"

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="container-fluid" id="hero">
        <div className="container">
          <div className="row">
            <div className="welcomeMessage">
              <h1>Find your perfect trip</h1>
              <p>designed by insiders who know and love their cities!</p>
              <Button href="/cities" className="botonazo">
                Choose your dream destination
              </Button>
            </div>
            <div className="palmeraPadre">
              <div className="circulo"></div>
              <img className="palmera " src={palmera} alt="palmera"></img>
              <img className="nube1 " src={nube} alt="palmera"></img>
              <img className="nube2 " src={nube} alt="palmera"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="socialPadre">
        <div className="container social-bg d-flex justify-content-evenly align-items-center">
          <div className="icon-f">
            <FaFacebookSquare className="icon" />
          </div>
          <div className="icon-f">
            <FaTwitter className="icon" />
          </div>
          <div className="icon-f">
            <FaLinkedin className="icon" />
          </div>
          <div className="icon-f">
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
      <div className="carros">
        <div className="container carrosaPadre">
          <MultipleRows />
        </div>
      </div>
      <Footer />
    </>
  )
}
