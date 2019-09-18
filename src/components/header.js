import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from "react-bootstrap"
import Image from "../images/james.jpg"


const Header = ({ siteTitle, addP }) => (
  <header
    style={{
      background: `#c0deed`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar bg="#" expand="lg">
      <Navbar.Brand href="#home">
        <img src={Image} width="70" style={{borderRadius: "50%", border: "10", borderColor: "white"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {
         addP &&
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="display-4">{siteTitle}</h1>
  
        <p className={"lead"}>
        <br/>
          I am a motivated and determined undergraduate student at University of
          California, Irvine studying Computer Science and currently seeking many
          different internship opportunities in the field. My future goal is to
          research and discover novel advancements!
        </p>
      
    </div>
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  addP: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
