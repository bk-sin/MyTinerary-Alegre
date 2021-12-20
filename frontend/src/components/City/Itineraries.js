import "./Itineraries.css"
import {RiMoneyDollarBoxFill} from "react-icons/ri"
import {useState, useEffect} from "react"
import likesAction from "../../redux/actions/likesActions"
import itinerariesActions from "../../redux/actions/itinerariesActions"
import authAction from "../../redux/actions/authActions"
import {connect} from "react-redux"
import {toast} from "react-toastify"

function Itineraries(props) {
  function price(price) {
    return Array.from({length: price})
  }

  const [liked, setliked] = useState("")
  const [likes, setlikes] = useState("")

  localStorage.getItem("token") && !props.user && props.tokenDale()

  if (!localStorage.getItem("token") && liked === "") {
    setliked(false)
  }

  useEffect(() => {
    !props.user && setliked(false)
  }, [props.user])

  if (props.itinerary && liked === "" && likes === "") {
    setliked(props.itinerary.likes.some((id) => id === props.user._id))
    setlikes(props.itinerary.likes.length)
  }

  function handleLike() {
    if (localStorage.getItem("token")) {
      setliked(!liked)
      liked ? setlikes(likes - 1) : setlikes(likes + 1)
      props.like(props.user._id, props.itinerary._id, props.params)
    } else {
      toast.info("Please sign in to like this itinerary", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
  }

  const [display, setDisplay] = useState(false)
  const handleClick = () => {
    setDisplay(!display)
    props.getActivities(props.itinerary._id)
  }

  return (
    <>
      <div className="itinerary">
        <h2 className="itinerary-title">{props.itinerary.title}</h2>
        <div className="itinerary-content">
          <img className="itinerary-photo" src={props.itinerary.src} alt="" />
          <h2 className="itinerary-username">{props.itinerary.name}</h2>
          <div className="itinerary-interactions">
            <div className="itinerary-likes interaction">
              <p>{likes}</p>
              <span onClick={handleLike} className="icon heart">
                {liked ? "🖤" : "❤️"}
              </span>
            </div>
            <div className="itinerary-price interaction">
              <p>Price:</p>
              <span className="icon price">
                {price(props.itinerary.price).map(() => (
                  <RiMoneyDollarBoxFill />
                ))}
              </span>
            </div>
            <div className="itinerary-duration interaction">
              <p>{props.itinerary.duration}Hs</p>
              <span className="icon ">⏲</span>
            </div>
          </div>
          <div className="tags">
            {props.itinerary.hashtags.map((hash) => (
              <div className="tag">#{hash}</div>
            ))}
          </div>
          {display && (
            <div className="activities">
              {display &&
                props.activities[0] &&
                props.activities.map((activity) => {
                  if (activity.itinerary._id === props.itinerary._id) {
                    return (
                      <div className="activity">
                        <div
                          className="activityPic"
                          style={{backgroundImage: `url("${activity.image}")`}}
                        >
                          <h5>{activity.title}</h5>
                        </div>
                      </div>
                    )
                  }
                })}
            </div>
          )}
        </div>
        <button onClick={handleClick}>
          {" "}
          {display ? "View less" : "View more"}
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.authReducer.user,
  }
}
const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,

  like: likesAction.like,
  tokenDale: authAction.tokenDale,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
