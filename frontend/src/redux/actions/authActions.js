import axios from "axios"
import {toast} from "react-toastify"

const authAction = {
  signupUser: (email, password, name, lastname, photo, country, google) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/auth/signup",
          {
            email,
            password,
            name,
            lastname,
            photo,
            country,
            google,
          }
        )
        if (response.data.success && !response.data.error) {
          localStorage.setItem("token", response.data.response.token)
          console.log(response)
          dispatch({
            type: "NEW_USER",
            payload: response.data.response,
          })
        } else {
          console.error(response.data.response)
          return {error: "response"}
        }
      } catch (error) {
        console.error("error")
      }
    }
  },
  signinUser: (email, password) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/signin",
          {
            email,
            password,
          }
        )
        if (response.data.success) {
          localStorage.setItem("token", response.data.response[0].token)
          console.log(response.data.response)
          toast.success("Logueado pa")

          dispatch({
            type: "SIGNIN_USER",
            payload: response.data.response[0],
          })
        } else {
          toast.error("no Logueado pa")
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  tokenDale: () => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "http://localhost:4000/api/auth",

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        dispatch({
          type: "TOKEN",
          payload: response.data,
        })
      } catch (error) {}
    }
  },
  signOut: () => {
    localStorage.removeItem("token")
    return (dispatch, getState) => {
      dispatch({type: "SIGN_OUT", payload: null})
    }
  },
}

export default authAction
