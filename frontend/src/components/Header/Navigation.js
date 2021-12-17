import "./Navigation.css"
import {useState} from "react"
import {Navbar, Nav, Container, NavDropdown, Modal} from "react-bootstrap"
import {Link} from "react-router-dom"
import authAction from "../../redux/actions/authActions"
import {connect} from "react-redux"
import SignIn from "../Form/SignIn"
import SignUp from "../Form/SignUp"

import {FaRegUserCircle} from "react-icons/fa"

function Navigations(props) {
  const [showSI, setShowSI] = useState(false)
  const handleCloseSI = () => setShowSI(false)
  const handleShowSI = () => setShowSI(true)
  const [showSU, setShowSU] = useState(false)
  const handleCloseSU = () => setShowSU(false)
  const handleShowSU = () => setShowSU(true)
  props.token && showSI && handleCloseSI()
  props.token && showSU && handleCloseSU()
  localStorage.getItem("token") && !props.token && props.tokenDale()
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Modal show={showSI} onHide={handleCloseSI}>
          <SignIn />
          <div className="noAccount">
            <p>Don't have an account yet?</p>
            <div
              onClick={() => {
                handleCloseSI()
                handleShowSU()
              }}
              className="callToActionSignUp"
            >
              Sign up
            </div>
          </div>
        </Modal>
        <Modal show={showSU} onHide={handleCloseSU}>
          <SignUp />
          <div className="noAccount up">
            <p className="up">Did you have an account?</p>
            <div
              onClick={() => {
                handleCloseSU()
                handleShowSI()
              }}
              className="callToActionSignUp up"
            >
              Sign in
            </div>
          </div>
        </Modal>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <span className="yellow">My</span>
              <span className="white">Tinerary</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="barraNav justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                <span className="white-link active shadowfilter">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/cities">
                <span className="white-link shadowfilter">Cities</span>
              </Nav.Link>

              {!props.token ? (
                <>
                  <NavDropdown
                    className="white-link "
                    title={<FaRegUserCircle className="shadowfilter" />}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={handleShowSU}>
                      <span className="white-link">Sign Up</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleShowSI}>
                      <span className="white-link">Sign In</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    className="white-link "
                    title={
                      <img
                        src={
                          props.user.photo
                            ? props.user.photo
                            : "https://imgr.search.brave.com/zSfU6el8hpUOkwT9t_f4MvwcHLUpGMgU3RvAwlixl8k/fit/400/356/ce/1/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20veC9uby1j/YW1lcmEtcHJvaGli/aXRlZC1iYW5uZWQt/Zm9yYmlkZGVuLTUy/MzA2OTUuanBn"
                        }
                        className="nav-img shadowfilter"
                        alt="user_photo"
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        props.signOut()
                      }}
                    >
                      <span className="white-link ">Sign out</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const mapDispatchToProps = {
  signinUser: authAction.signinUser,
  tokenDale: authAction.tokenDale,
  signOut: authAction.signOut,
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigations)
