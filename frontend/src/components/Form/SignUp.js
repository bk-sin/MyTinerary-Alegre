import "./Sign.css"
import {useRef} from "react"
import {connect} from "react-redux"
import authAction from "../../redux/actions/authActions"

function SignUp(props) {
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
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  signupUser: authAction.signupUser,
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.authReducer.user,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
