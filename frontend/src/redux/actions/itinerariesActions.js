import axios from "axios"
import {toast} from "react-toastify"

const itinerariesAction = {
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
  getActivities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "https://mytinerary-alegre.herokuapp.com/api/activities"
      )
      dispatch({type: "GET_ACTIVITIES", payload: response.data.response})
    }
  },

  postComment: (comment, userID, itineraryID, city_id) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")
      if (comment && userID && itineraryID && city_id) {
        let response = await axios.post(
          "https://mytinerary-alegre.herokuapp.com/api/comments",
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
        "https://mytinerary-alegre.herokuapp.com/api/comments",
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
        "https://mytinerary-alegre.herokuapp.com/api/itineraries/" + city_id
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
        "https://mytinerary-alegre.herokuapp.com/api/comments",
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
        "https://mytinerary-alegre.herokuapp.com/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARIES_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
}

export default itinerariesAction
