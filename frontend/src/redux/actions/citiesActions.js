import axios from "axios"

const citiesAction = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/cities")
      dispatch({
        type: "GET_ALL_CITIES",
        payload: response.data.response,
      })
    }
  },
  getCity: (cities, id) => {
    return (dispatch, getState) => {
      dispatch({
        type: "GET_A_CITY",
        payload: {cities, id},
      })
    }
  },
  filterCities: (cities, search) => {
    return (dispatch) => {
      dispatch({type: "SEARCH", payload: {cities, search}})
    }
  },
  getItineraries: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/itineraries")
      dispatch({
        type: "GET_ALL_ITINERARIES",
        payload: response.data.response,
      })
    }
  },
}

export default citiesAction
