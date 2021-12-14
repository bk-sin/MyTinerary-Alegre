import "./CitiesCards.css"
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap"
import citiesAction from "../../redux/actions/citiesActions"
import {connect} from "react-redux"

function CitiesCards(props) {
  !props.cities[0] && props.getCities()

  return (
    <div className="bg">
      <Container className="center">
        <input
          className="SearchInput"
          onChange={(e) =>
            props.filterCities(
              props.cities,
              e.target.value.toLowerCase().trim()
            )
          }
          type="text"
          placeholder="Search a City"
        />
      </Container>
      <div className="cartas">
        {props.cities[0] ? (
          props.auxiliar[0] ? (
            props.auxiliar.map((city, index) => (
              <Link key={index} className="cartalink" to={`/city/${city._id}`}>
                <div
                  className={`carta ${
                    index === 5 || index === 10 ? "paddtop" : ""
                  }`}
                  style={{backgroundImage: "url(" + city.src + ")"}}
                >
                  <div className="carta-content">
                    <h2 className="carta-title">{city.name}</h2>
                    <div className="boton">Learn more</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1>No matching results!</h1>
          )
        ) : (
          <svg className="spinner" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        )}
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  filterCities: citiesAction.filterCities,
  getCities: citiesAction.getCities,
}

const mapStateToProps = (state) => {
  return {
    auxiliar: state.citiesReducer.auxiliar,
    cities: state.citiesReducer.cities,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesCards)
