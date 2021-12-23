import "./Itineraries.css"
import {RiMoneyDollarBoxFill} from "react-icons/ri"
import {Carousel} from "react-bootstrap"
import {useState, useEffect, useRef} from "react"
import likesAction from "../../redux/actions/likesActions"
import itinerariesActions from "../../redux/actions/itinerariesActions"
import authAction from "../../redux/actions/authActions"
import {connect} from "react-redux"
import {toast} from "react-toastify"
import Comment from "./Comment"
import {FiSend} from "react-icons/fi"

function Itineraries(props) {
  const posteador = useRef()
  const [post, setPost] = useState(true)
  const [postComment, setPostComment] = useState("")
  const send = <FiSend />

  function handleSubmitP(e) {
    e.preventDefault()
    if (postComment) {
      props.postComment(
        postComment,
        props.user._id,
        props.itinerary._id,
        props.params
      )
    }
    localStorage.getItem("token") && (posteador.current.value = "")
  }

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
    setliked(props.itinerary.likes.some((id) => id === props.user._id))
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
    props.activities && props.getActivities()
  }

  return (
    <>
      <div className="itinerary mt-4">
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
              <Carousel fade className="activity">
                {display &&
                  props.activities &&
                  props.activities.map((activity) => {
                    if (activity.itinerary._id === props.itinerary._id) {
                      return (
                        <Carousel.Item className="activity">
                          <img
                            className="w-100 activityPic "
                            src={activity.image}
                            alt="slide"
                          />
                          <Carousel.Caption className="oscurito">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      )
                    }
                  })}
              </Carousel>
              <div>
                <div className="commentBox">
                  <h1>Comments</h1>
                  <div className="comments">
                    {props.itinerary.comments.map(
                      (comment) =>
                        comment.comment && (
                          <Comment
                            comment={comment}
                            itineraryID={props.itinerary._id}
                            params={props.params}
                            user={props.user._id}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>

              <div className="newComment">
                <form onSubmit={handleSubmitP} className="posteador">
                  <label>Post:</label>
                  <input
                    type="text"
                    name="editor"
                    className="inputtext"
                    required
                    autoComplete="false"
                    maxlength="140"
                    placeholder="Leave your message here :)"
                    ref={posteador}
                    onInput={() =>
                      setPostComment(posteador.current.value.trim())
                    }
                  />

                  <input type="submit" value="👆" className="send " />
                </form>
              </div>
            </div>
          )}

          <button className="btn-signup mt-4" onClick={handleClick}>
            {" "}
            {display ? "View less" : "View more"}
          </button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  }
}
const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
  postComment: itinerariesActions.postComment,
  like: likesAction.like,
  tokenDale: authAction.tokenDale,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
