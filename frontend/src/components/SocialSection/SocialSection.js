import "./SocialSection.css"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import {Container} from "react-bootstrap"

export default function Hero() {
  return (
    <>
      <div className="socialPadre">
        <Container className="social-bg d-flex justify-content-evenly align-items-center">
          <div className="icon-bg">
            <FaFacebookSquare className="icon" />
          </div>
          <div className="icon-bg">
            <FaTwitter className="icon" />
          </div>
          <div className="icon-bg">
            <FaLinkedin className="icon" />
          </div>
          <div className="icon-bg">
            <FaInstagram className="icon" />
          </div>
        </Container>
      </div>
    </>
  )
}
