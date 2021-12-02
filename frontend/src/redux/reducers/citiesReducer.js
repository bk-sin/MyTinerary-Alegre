const initialState = {
  state: [],
  cities: [],
  auxiliar: [],
  city: [],
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CITIES":
      return {
        ...state,
        cities: action.payload,
        auxiliar: action.payload,
      }
    case "GET_A_CITY":
      return {
        ...state,
        city: action.payload,
      }
    default:
      return state
  }
}

export default citiesReducer
