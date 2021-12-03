import {Container} from "react-bootstrap"
import "./Itineraries.css"
import {RiMoneyDollarBoxFill} from "react-icons/ri"

export default function Itineraries() {
  return (
    <div className="itinerary">
      <h2 className="itinerary-title">Cultural Tour</h2>
      <div className="itinerary-content">
        <img
          className="itinerary-photo"
          src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg"
          alt=""
        />
        <h2 className="itinerary-username">Louis Schmidt</h2>
        <div className="itinerary-interactions">
          <div className="itinerary-likes interaction">
            <p>2</p>
            <span className="icon heart">❤</span>
          </div>
          <div className="itinerary-price interaction">
            <p>Price:</p>
            <span className="icon price">
              {" "}
              <RiMoneyDollarBoxFill />
              <RiMoneyDollarBoxFill />
              <RiMoneyDollarBoxFill />
              <RiMoneyDollarBoxFill />
              <RiMoneyDollarBoxFill />
            </span>
          </div>
          <div className="itinerary-duration interaction">
            <p>4hs</p>
            <span className="icon ">⏲</span>
          </div>
        </div>
        <div className="tags">
          <div className="tag">#MoulinRouge</div>
          <div className="tag">#NightInParis</div>
          <div className="tag">#TourEiffel</div>
          <div className="tag">#CityOfLove</div>
        </div>
        <button className="botonaso">View more</button>
      </div>
    </div>
  )
}
