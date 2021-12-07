import {Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import "../../components/CityCards/CityCards.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import Itineraries from "./Itineraries"
import {connect} from "react-redux"
import citiesAction from "../../redux/actions/citiesActions"
import itinerariesAction from "../../redux/actions/citiesActions"
import {Spinner} from "react-bootstrap"

function City(props) {
  const params = useParams()

  useEffect(() => {
    !props.cities[0] && props.getCities()
    props.cities[0] && props.getCity(props.cities, params.id)
    props.getItinerariesByCityId(params.id)
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
          props.itineraries.length > 0 ? (
            props.itineraries.map((itinerary) => (
              <Itineraries itinerary={itinerary} />
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
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
  }
}
const mapDispatchToProps = {
  getCity: citiesAction.getCity,
  getCities: citiesAction.getCities,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
