import "./Navigation.css"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import authAction from "../../redux/actions/authActions"
import {connect} from "react-redux"

import {FaRegUserCircle} from "react-icons/fa"

function Navigations(props) {
  !props.token && props.tokenDale()
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
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
              <Nav.Link>
                <Link to="/">
                  <span className="white-link active shadowfilter">Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cities">
                  <span className="white-link shadowfilter">Cities</span>
                </Link>
              </Nav.Link>

              {!props.token ? (
                <>
                  <NavDropdown
                    className="white-link "
                    title={<FaRegUserCircle className="shadowfilter" />}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/signup">
                        <span className="white-link ">Sign Up</span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/signin">
                        <span className="white-link">Sign In</span>
                      </Link>
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
                    <NavDropdown.Item>
                      <Link
                        to="/"
                        onClick={() => {
                          props.signOut()
                        }}
                      >
                        <span className="white-link ">Sign out</span>
                      </Link>
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
