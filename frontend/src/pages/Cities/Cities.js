import React, {Component} from "react"
import CitiesCards from "../../components/CityCards/CitiesCards"
import "./Cities.css"

export default class Cities extends Component {
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
