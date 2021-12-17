import {combineReducers} from "redux"
import authReducer from "./authReducer"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"
import likesReducer from "./likesReducer"

const rootReducer = combineReducers({
  citiesReducer: citiesReducer,
  itinerariesReducer: itinerariesReducer,
  authReducer: authReducer,
  likesReducer: likesReducer,
})

export default rootReducer
