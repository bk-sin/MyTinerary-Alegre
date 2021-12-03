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
      const city = cities.find((elem) => elem._id === id)
      dispatch({
        type: "GET_A_CITY",
        payload: city,
      })
    }
  },
  filterCities: (cities, search) => {
    return (dispatch) => {
      dispatch({type: "SEARCH", payload: {cities, search}})
    }
  },
}

export default citiesAction
