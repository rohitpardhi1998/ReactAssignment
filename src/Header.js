import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          <Link to="/list"> Contact List </Link>
          <Link to="/add">Add contact </Link>
          <Link to="/edit">Edit contact </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
