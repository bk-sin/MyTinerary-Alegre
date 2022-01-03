import axios from "axios"

const citiesAction = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "https://mytinerary-alegre.herokuapp.com/api/cities"
      )
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
  getItinerariesByCityId: (city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "https://mytinerary-alegre.herokuapp.com/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
}

export default citiesAction
