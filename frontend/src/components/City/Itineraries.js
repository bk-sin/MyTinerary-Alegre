import "./Itineraries.css"
import {RiMoneyDollarBoxFill} from "react-icons/ri"
import {useState} from "react"
import likesAction from "../../redux/actions/likesActions"
import authAction from "../../redux/actions/authActions"
import {connect} from "react-redux"

function Itineraries({itinerary, tokenDale, user, functionLike}) {
  function price(price) {
    return Array.from({length: price})
  }

  localStorage.getItem("token") && !user && tokenDale()

  const [display, setDisplay] = useState(false)
  const handleClick = () => setDisplay(!display)

  return (
    <div className="itinerary">
      <h2 className="itinerary-title">{itinerary.title}</h2>
      <div className="itinerary-content">
        <img className="itinerary-photo" src={itinerary.src} alt="" />
        <h2 className="itinerary-username">{itinerary.name}</h2>
        <div className="itinerary-interactions">
          <div className="itinerary-likes interaction">
            <p>{itinerary.likes.length}</p>
            <span
              onClick={() => {
                functionLike(user._id, itinerary._id)
              }}
              className="icon heart"
            >
              ♥
            </span>
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
        {display && <h4>Under Construction...</h4>}
        <button onClick={handleClick}>
          {" "}
          {display ? "View less" : "View more"}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  }
}
const mapDispatchToProps = {
  like: likesAction.like,
  tokenDale: authAction.tokenDale,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
