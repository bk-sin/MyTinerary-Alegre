import {combineReducers} from "redux"
import authReducer from "./authReducer"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"

const rootReducer = combineReducers({
  citiesReducer: citiesReducer,
  itinerariesReducer: itinerariesReducer,
  authReducer: authReducer,
})

export default rootReducer
