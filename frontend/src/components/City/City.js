import {Container} from "react-bootstrap"
import {useParams, Link} from "react-router-dom"
import React, {useEffect} from "react"
import "../../components/CityCards/CityCards.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import Itineraries from "./Itineraries"
import {connect} from "react-redux"
import citiesAction from "../../redux/actions/citiesActions"

function City(props) {
  const params = useParams()

  useEffect(() => {
    props.cities.length === 0 && props.getCities()
    props.cities.length > 0 && props.getCity(props.cities, params.id)
  }, [props.cities])

  console.log(props)

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

        <h1 className="text-center under">Under construction</h1>

        <Itineraries />
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
  }
}
const mapDispatchToProps = {
  getCity: citiesAction.getCity,
  getCities: citiesAction.getCities,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
