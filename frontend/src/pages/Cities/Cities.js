import React, {Component} from "react"
import CitiesCards from "../../components/CitiesCards/CitiesCards"
import "./Cities.css"

class Cities extends Component {
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

export default Cities
