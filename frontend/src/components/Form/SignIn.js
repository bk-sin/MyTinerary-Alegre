import "./Sign.css"
import {useRef} from "react"
import {connect} from "react-redux"
import authAction from "../../redux/actions/authActions"
import {Link} from "react-router-dom"
import GoogleLogin from "react-google-login"
import {useNavigate} from "react-router-dom"

function SignIn(props) {
  let navigate = useNavigate()
  const responseGoogle = (response) => {
    console.log(response)
  }
  !props.token && props.tokenDale()
  const email = useRef()
  const password = useRef()
  function handleSignIn(e) {
    e.preventDefault()
    props.signinUser(email.current.value, password.current.value)
    email.current.value = ""
    password.current.value = ""
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
            <h1 className="signIn signTitle">Travel The World</h1>
            <p className="signIn signP">Sign in MyTinerary now</p>
            <form onSubmit={handleSignIn}>
              <input
                type="text"
                className="btn-signin"
                placeholder="Email"
                ref={email}
                required="true"
              />
              <input
                type="password"
                className="btn-signin"
                placeholder="Password"
                ref={password}
                required="true"
              />
              <input
                type="submit"
                value="Sign in"
                className="btn-signin Submit"
              />
            </form>
            <GoogleLogin
              clientId="113911854537-8j68k30a4qpl884ffcvk7hvdfmsdlfnc.apps.googleusercontent.com"
              buttonText="Sign Up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <div className="or">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <div className="noAccount">
              <p>Don't have an account yet?</p>
              <Link to="/signup" className="callToActionSignUp">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1>Name: {props.token && navigate("/", {replace: true})}</h1>
      <h1>Lastname: {props.token && props.token.lastname}</h1>
      <h1>Email: {props.token && props.token.email}</h1>
      <h1>
        Photo: <img src={props.token && props.token.photo} />{" "}
      </h1>
      <h1>
        Country: {(props.token && props.token.country) || "Select a country"}
      </h1>
      )
      <button
        onClick={() => {
          props.tokenDale()
          console.log(props.token)
        }}
      >
        Token
      </button>
    </div>
  )
}
const mapDispatchToProps = {
  signinUser: authAction.signinUser,
  tokenDale: authAction.tokenDale,
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
