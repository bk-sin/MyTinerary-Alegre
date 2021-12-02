import React, {Component} from "react"
import {connect} from "react-redux"
import CitiesCards from "../../components/CitiesCards/CitiesCards"
import "./Cities.css"
import citiesAction from "../../redux/actions/citiesActions"

class Cities extends Component {
  componentDidMount() {
    this.props.getCities()
  }
  render() {
    console.log(this.props)
    return (
      <>
        <div className="backg">
          <h1 className="h1back">Find your favorite city!</h1>
        </div>
        {this.props.cities.length > 0 ? (
          <CitiesCards data={this.props.cities} />
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    )
  }
}

const mapDispatchToProps = {
  getCities: citiesAction.getCities,
}
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
