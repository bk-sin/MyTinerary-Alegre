import "./Footer.css"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footerRectangle d-flex flex-column justify-content-evenly align-items-center">
        <a href="/" className="logo">
          <h1>
            <span className="yellow">My</span>
            <span className="white">Tinerary</span>
          </h1>
        </a>
        <p className="footerParag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="footerLinks">
          <a href="/">Home</a>
          <a href="/cities">Cities</a>
        </div>
        <div>
          <FaFacebookSquare className="Footersocials" />
          <FaTwitter className="Footersocials" />
          <FaLinkedin className="Footersocials" />
          <FaInstagram className="Footersocials" />
        </div>
        <p className="footerCopy">
          Copyright © 2022. LogoIpsum. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
