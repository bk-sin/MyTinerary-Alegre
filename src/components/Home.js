import "../App.css"
import palmera from "../palmera.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <div className='container-fluid' id='hero'>
      <div className='container'>
        <div className='row'>
          <div className='welcomeMessage'>
            <h1>Find your perfect trip</h1>
            <p>designed by insiders who know and love their cities!</p>
            <button className="botonazo">Choose your dream destination</button>
          </div>
          <div className='palmeraPadre'>
            <div className='circulo'></div>
            <img className='palmera ' src={palmera}></img>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='social-bg d-flex justify-content-evenly align-items-center'>
            <div className='icon-f'>
            <FaFacebookSquare className='icon'/>
            </div>
            <div className='icon-f'>
            <FaTwitter className='icon'/>
            </div>
            <div className='icon-f'>
            <FaLinkedin className='icon'/>
            </div>
          </div>
      </div>
      <div className='row'>
          <div className='container'>
            
          </div>
      </div>
    </div>
  )
}
