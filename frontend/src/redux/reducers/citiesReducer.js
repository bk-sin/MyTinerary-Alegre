const citiesReducer = (state = {getCities: []}, action) => {
  switch (action.type) {
    case "GET_ALL_CITIES":
      return {
        ...state,
        getCities: action.payload,
      }

    default:
      return state
  }
}

export default citiesReducer
