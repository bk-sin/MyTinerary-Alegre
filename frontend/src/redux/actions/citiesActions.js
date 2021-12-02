import axios from "axios"

const citiesAction = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/cities")
      let data = response.data.response
      dispatch({type: "GET_ALL_CITIES", payload: data})
    }
  },
}

export default citiesAction
