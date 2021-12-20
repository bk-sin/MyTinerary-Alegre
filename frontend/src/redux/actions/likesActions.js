import axios from "axios"
import {toast} from "react-toastify"

const likesAction = {
  like: (userID, itineraryID, cityID) => {
    return async (dispatch, getstate) => {
      if (userID && itineraryID) {
        const like = await axios.put("http://localhost:4000/api/like", {
          itineraryID,
          userID,
        })
        let response = await axios.get(
          "http://localhost:4000/api/itineraries/" + cityID
        )
        dispatch({
          type: "LIKE",
          payload: response.data.response,
        })
      } else {
        toast.info("Please sign in to like this itinerary", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      }
    }
  },
  getLikes: (cityID) => {
    return async (dispatch, getstate) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + cityID
      )
      dispatch({
        type: "LIKE",
        payload: response.data.response,
      })
    }
  },
}
export default likesAction
