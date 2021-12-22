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

  postComment: (comment, userID, itineraryID, city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.post("http://localhost:4000/api/comments", {
        comment,
        userID,
        itineraryID,
      })
      /* let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      ) */
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
  delComment: (itineraryID, commentID, type, city_id) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")
      let comment = await axios.put(
        "http://localhost:4000/api/comments",
        {
          itineraryID,
          commentID,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
  modComment: (itineraryID, commentID, edit, type, city_id) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")

      await axios.put(
        "http://localhost:4000/api/comments",
        {
          itineraryID,
          commentID,
          edit,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
}

export default itinerariesAction
