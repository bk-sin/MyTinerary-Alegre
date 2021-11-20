import "./Navigation.css"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"

import {FaRegUserCircle} from "react-icons/fa"

export default function Navigations() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span className="yellow">My</span>
            <span className="white">Tinerary</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="barraNav justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link href="/">
                <span className="white-link active shadowfilter">Home</span>
              </Nav.Link>
              <Nav.Link href="/cities">
                <span className="white-link shadowfilter">Cities</span>
              </Nav.Link>
              <NavDropdown
                className="white-link "
                title={<FaRegUserCircle className="shadowfilter" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">
                  <span className="white-link ">Sign Up</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <span className="white-link">Sign In</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
