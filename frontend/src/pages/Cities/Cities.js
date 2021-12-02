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
    return (
      <>
        <div className="backg">
          <h1 className="h1back">Find your favorite city!</h1>
        </div>
        <CitiesCards />
      </>
    )
  }
}

const mapDispatchToProps = {
  getCities: citiesAction.getCities,
}

export default connect(null, mapDispatchToProps)(Cities)
