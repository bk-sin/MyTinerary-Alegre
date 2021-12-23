import {Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {useEffect} from "react"
import "../../components/CityCards/CityCards.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import "./Itineraries.css"
import {connect} from "react-redux"
import citiesAction from "../../redux/actions/citiesActions"
import itinerariesAction from "../../redux/actions/citiesActions"
import likesAction from "../../redux/actions/likesActions"
import authAction from "../../redux/actions/authActions"
import {Spinner} from "react-bootstrap"
import itinerariesActions from "../../redux/actions/itinerariesActions"
import Itineraries from "./Itineraries"

function City(props) {
  const params = useParams()

  useEffect(() => {
    !props.cities[0] && props.getCities()
    props.cities[0] && props.getCity(props.cities, params.id)
    props.getItinerariesByCityId(params.id)
    props.getLikes(params.id)
  }, [props.cities])

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
          props.itineraries[0] ? (
            props.itineraries.map((itinerary, index) => (
              <Itineraries
                itinerary={itinerary}
                index={index}
                user={props.user}
                params={params.id}
                activities={props.activities}
                comments={props.comments}
              />
            ))
          ) : (
            <h1 className="itinerary-title mt-4 ">
              There are not itineraries for this city yet...
            </h1>
          )
        ) : (
          <Spinner className="spinner" animation="border" variant="warning" />
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.itinerariesReducer.comments,
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
    activities: state.itinerariesReducer.activities,
    user: state.authReducer.user,
  }
}
const mapDispatchToProps = {
  getCity: citiesAction.getCity,
  getCities: citiesAction.getCities,
  like: likesAction.like,
  getLikes: likesAction.getLikes,
  tokenDale: authAction.tokenDale,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
  getActivities: itinerariesAction.getActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
