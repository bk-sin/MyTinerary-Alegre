import axios from "axios"
import {toast} from "react-toastify"

const authAction = {
  signupUser: (email, password, name, lastname, photo, country, google) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "https://mytinerary-alegre.herokuapp.com/api/auth/signup",
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
          toast.success(
            "Welcome to MyTinerary " + response.data.response.newUser.name
          )
          dispatch({
            type: "NEW_USER",
            payload: response.data.response,
          })
        } else {
          toast.error(response.data.errors)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  signinUser: (email, password) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(
          "https://mytinerary-alegre.herokuapp.com/api/auth/signin",
          {
            email,
            password,
          }
        )

        if (response.data.success) {
          localStorage.setItem("token", response.data.response[0].token)
          toast.success(
            "Welcome to MyTinerary " + response.data.response[0].name
          )

          dispatch({
            type: "SIGNIN_USER",
            payload: response.data.response[0],
          })
        } else {
          toast.error(response.data.error)
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
          "https://mytinerary-alegre.herokuapp.com/api/auth",

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
      dispatch({type: "SIGN_OUT", payload: ""})
    }
  },
}

export default authAction
