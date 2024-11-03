import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar bg="info" variant="dark" expand="lg" className="px-4 fixed-top rounded-1">
        <Navbar.Brand href="#home" className="text-black">
        <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Universe&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto gap-3">
            <NavLink to="/" className="nav-link text-white">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link text-white">
              About
            </NavLink>
            <NavLink to="/reservation" className="nav-link text-white">
              Reservation
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
