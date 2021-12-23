import axios from "axios"
import {toast} from "react-toastify"

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
      const token = localStorage.getItem("token")
      if (comment && userID && itineraryID && city_id) {
        let response = await axios.post(
          "http://localhost:4000/api/comments",
          {
            comment,
            userID,
            itineraryID,
            city_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        dispatch({
          type: "GET_ITINERARIES_BY_CITY_ID",
          payload: response.data.response,
        })
      } else {
        toast.warning("You need to sign in", {
          position: toast.POSITION.TOP_CENTER,
        })
      }
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
