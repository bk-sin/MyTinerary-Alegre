const initialState = {
  state: [],
  itineraries: [],
  activities: [],
  comments: [],
}

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES_BY_CITY_ID":
      return {
        ...state,
        itineraries: action.payload,
      }
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      }
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      }

    default:
      return state
  }
}

export default itinerariesReducer
