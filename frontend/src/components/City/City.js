import {Container, Modal} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import "../../components/CityCards/CityCards.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import {RiMoneyDollarBoxFill} from "react-icons/ri"
import "./Itineraries.css"
import {connect} from "react-redux"
import citiesAction from "../../redux/actions/citiesActions"
import itinerariesAction from "../../redux/actions/citiesActions"
import likesAction from "../../redux/actions/likesActions"
import authAction from "../../redux/actions/authActions"
import {Spinner} from "react-bootstrap"

function City(props) {
  const params = useParams()

  useEffect(() => {
    !props.cities[0] && props.getCities()
    props.cities[0] && props.getCity(props.cities, params.id)
    props.getItinerariesByCityId(params.id)
    props.getLikes(params.id)
  }, [props.cities])

  function price(price) {
    return Array.from({length: price})
  }

  const [display, setDisplay] = useState(false)
  const handleClick = () => setDisplay(!display)

  return (
    <>
      <Container
        fluid
        className="bg back centramelo"
        style={{backgroundImage: "url(" + props.city.src + ")"}}
      >
        <h1 className="h1back city">{props.city.name}</h1>
      </Container>
      <Container className="bg" fluid>
        <Container>
          <p className="description">{props.city.description}</p>
          <Link className="backbtn" to="/cities">
            <IoMdArrowRoundBack /> Back to Cities
          </Link>
        </Container>
        {props.cities[0] ? (
          props.itineraries.length > 0 ? (
            props.itineraries.map((itinerary, index) => (
              <>
                <div className="itinerary">
                  <h2 className="itinerary-title">{itinerary.title}</h2>
                  <div className="itinerary-content">
                    <img
                      className="itinerary-photo"
                      src={itinerary.src}
                      alt=""
                    />
                    <h2 className="itinerary-username">{itinerary.name}</h2>
                    <div className="itinerary-interactions">
                      <div className="itinerary-likes interaction">
                        <p>{props.likes && props.likes[index].likes.length}</p>
                        <span
                          onClick={() => {
                            props.like(props.user._id, itinerary._id, params.id)
                          }}
                          className="icon heart"
                        >
                          {props.likes &&
                          props.likes[index].likes.some(
                            (id) => id === props.user._id
                          )
                            ? "🖤"
                            : "❤️"}
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
              </>
            ))
          ) : (
            <h1>There are not itineraries for this city yet...</h1>
          )
        ) : (
          <Spinner className="spinner" animation="border" variant="warning" />
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
    user: state.authReducer.user,
    likes: state.likesReducer.like,
  }
}
const mapDispatchToProps = {
  getCity: citiesAction.getCity,
  getCities: citiesAction.getCities,
  like: likesAction.like,
  getLikes: likesAction.getLikes,
  tokenDale: authAction.tokenDale,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
