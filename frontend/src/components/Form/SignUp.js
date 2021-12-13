import "./Sign.css"
import {useRef, useState} from "react"
import {connect} from "react-redux"
import authAction from "../../redux/actions/authActions"
import {useNavigate} from "react-router-dom"
import GoogleLogin from "react-google-login"
import {Link} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"

function SignUp(props) {
  const [option, setOption] = useState(false)
  console.log(props)
  let navigate = useNavigate()

  !props.token && props.tokenDale()
  props.token && navigate("/", {replace: true})
  const responseGoogle = (res) => {
    props.signupUser(
      res.profileObj.email,
      res.profileObj.googleId,
      res.profileObj.givenName,
      res.profileObj.familyName,
      res.profileObj.imageUrl,
      "Argentina",
      true
    )
  }

  const email = useRef()
  const password = useRef()
  const name = useRef()
  const lastname = useRef()
  const photo = useRef()
  const country = useRef()

  function handleSignUp(e) {
    e.preventDefault()

    props.signupUser(
      email.current.value,
      password.current.value,
      name.current.value,
      lastname.current.value,
      photo.current.value,
      country.current.value
    )

    email.current.value = ""
    password.current.value = ""
    name.current.value = ""
    lastname.current.value = ""
    photo.current.value = ""
    country.current.value = ""
  }
  return (
    <div className="signMain">
      <div className="signBody">
        <img
          src="https://i.imgur.com/FYtTskU.jpg"
          alt=""
          className="signImage"
        />
        <div className="signLine"></div>
        <div className="backMyTinerary">
          <div className="backForm">
            <h1 className="signUp signTitle">Travel The World</h1>
            <p className="signUp signP">Sign up MyTinerary now</p>

            {option ? (
              <>
                <form className="formSignUp" onSubmit={handleSignUp}>
                  <div className="labelsInputs">
                    <div className="name inputlabel">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="btn-signup"
                        ref={name}
                      ></input>
                    </div>

                    <div className="name inputlabel">
                      <label htmlFor="lastname">Lastname</label>
                      <input
                        type="text"
                        id="lastname"
                        className="btn-signup"
                        ref={lastname}
                      ></input>
                    </div>
                    <div className="name inputlabel">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        className="btn-signup"
                        ref={email}
                      ></input>
                    </div>
                    <div className="name inputlabel">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="btn-signup"
                        ref={password}
                      ></input>
                    </div>
                    <div className="name inputlabel">
                      <label htmlFor="photo">Photo</label>
                      <input
                        type="text"
                        id="photo"
                        className="btn-signup"
                        ref={photo}
                      ></input>
                    </div>
                    <div className="name inputlabel">
                      <label htmlFor="country">Country</label>
                      <select
                        type="text"
                        id="country"
                        className="btn-signup"
                        ref={country}
                      >
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Peru">Peru</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" className="btn-signup" value="Sign up" />
                </form>
                <button
                  className="btn-signin Submit"
                  onClick={() => setOption(false)}
                >
                  <IoIosArrowBack /> Back
                </button>
              </>
            ) : (
              <>
                <button className="btn-signup" onClick={() => setOption(true)}>
                  Sign up with email
                </button>
                <GoogleLogin
                  clientId="113911854537-8j68k30a4qpl884ffcvk7hvdfmsdlfnc.apps.googleusercontent.com"
                  buttonText="Sign Up with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <div className="noAccount">
                  <p>Don't have an account yet?</p>
                  <Link to="/signin" className="callToActionSignUp">
                    Sign in
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  signupUser: authAction.signupUser,
  tokenDale: authAction.tokenDale,
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
