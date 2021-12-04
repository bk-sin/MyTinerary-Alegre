import {Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import "../../components/CityCards/CityCards.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import Itineraries from "./Itineraries"
import {connect} from "react-redux"
import citiesAction from "../../redux/actions/citiesActions"

function City(props) {
  const [itinerariesFiltered, setItinerariesFiltered] = useState([])
  useEffect(() => {
    !props.cities[0] && props.getCities()
    !props.itineraries[0] && props.getItineraries()
    props.cities[0] && props.getCity(props.cities, params.id)

    if (props.itineraries.length > 0) {
      setItinerariesFiltered(
        props.itineraries.filter(
          (itinerary) => itinerary.city._id === params.id
        )
      )
    }
  }, [props.cities, props.itineraries])

  const params = useParams()
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
        {itinerariesFiltered.length > 0 ? (
          <Itineraries itinerariesFiltered={itinerariesFiltered} />
        ) : (
          <h1 className="text-center under">Under construction</h1>
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.citiesReducer.itineraries,
  }
}
const mapDispatchToProps = {
  getCity: citiesAction.getCity,
  getCities: citiesAction.getCities,
  getItineraries: citiesAction.getItineraries,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
