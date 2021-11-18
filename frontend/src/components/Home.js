import "../App.css"
import palmera from "../palmera.png"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import Carrosa from "./Carousel"
import Navigation from "./Navigation"
import nube from '../image 1.png'
import MultipleRows from "./MultipleRows"


export default function Home() {
  return (
    <>
        <Navigation />

    <div className='container-fluid' id='hero'>
      <div className='container'>
        <div className='row'>
          <div className='welcomeMessage'>
            <h1>Find your perfect trip</h1>
            <p>designed by insiders who know and love their cities!</p>
            <button className='botonazo'>Choose your dream destination</button>
          </div>
          <div className='palmeraPadre'>
            <div className='circulo'></div>
            <img className='palmera ' src={palmera} alt='palmera'></img>
            <img className='nube1 ' src={nube} alt='palmera'></img>
            <img className='nube2 ' src={nube} alt='palmera'></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='container social-bg d-flex justify-content-evenly align-items-center'>
          <div className='icon-f'>
            <FaFacebookSquare className='icon' />
          </div>
          <div className='icon-f'>
            <FaTwitter className='icon' />
          </div>
          <div className='icon-f'>
            <FaLinkedin className='icon' />
          </div>
          <div className='icon-f'>
            <FaInstagram className='icon' />
          </div>
        </div>
      </div>
      <div className='row carrosa'>
        <div className='container carrosaPadre'>
          {/* <Carrosa /> */}
          <MultipleRows/>
        </div>
      </div>
    </div>
    </>
  )
}
