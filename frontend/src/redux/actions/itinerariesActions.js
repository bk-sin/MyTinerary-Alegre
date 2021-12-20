import axios from "axios"

const itinerariesAction = {
  getItinerariesByCityId: (city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
  getActivities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/activities")
      dispatch({type: "GET_ACTIVITIES", payload: response.data.response})
    }
  },
}

export default itinerariesAction
