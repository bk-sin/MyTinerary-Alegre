import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"

const rootReducer = combineReducers({
  citiesReducer: citiesReducer,
  itinerariesReducer: itinerariesReducer,
})

export default rootReducer
