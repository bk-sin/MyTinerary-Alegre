import "./Itineraries.css"
import {RiMoneyDollarBoxFill} from "react-icons/ri"
import {Button, Collapse} from "react-bootstrap"
import {useState} from "react"

export default function Itineraries(props) {
  const [open, setOpen] = useState("")
  function price(price) {
    return Array.from({length: price})
  }

  return (
    props.itineraries.length > 0 &&
    props.itineraries.map((itinerary) => (
      <div className="itinerary">
        <h2 className="itinerary-title">{itinerary.title}</h2>
        <div className="itinerary-content">
          <img className="itinerary-photo" src={itinerary.src} alt="" />
          <h2 className="itinerary-username">{itinerary.name}</h2>
          <div className="itinerary-interactions">
            <div className="itinerary-likes interaction">
              <p>{itinerary.likes}</p>
              <span className="icon heart">❤</span>
            </div>
            <div className="itinerary-price interaction">
              <p>Price:</p>
              <span className="icon price">
                {price(itinerary.price).map(() => (
                  <RiMoneyDollarBoxFill />
                ))}
              </span>
            </div>
            <div className="itinerary-duration interaction">
              <p>{itinerary.duration}Hs</p>
              <span className="icon ">⏲</span>
            </div>
          </div>
          <div className="tags">
            {itinerary.hashtags.map((hash) => (
              <div className="tag">#{hash}</div>
            ))}
          </div>
          <Button
            className="btn-warning p-1 fs-6 fw-normal m-1 botonaso
            "
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            {!open ? "View more" : "View less"}
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">Under Construction....</div>
          </Collapse>
        </div>
      </div>
    ))
  )
}
