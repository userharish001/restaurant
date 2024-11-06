import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  const [expanded,setExpanded] = useState(false);
  const showToggle = ()=>{setExpanded(!expanded)}
  const closeToggle = ()=>{setExpanded(false)}
  return (
    <div className="mb-5">
      <Navbar bg="info" variant="dark" expand="lg" className="px-3 fixed-top rounded-2" expanded={expanded}>
        <Navbar.Brand href="#home" className="text-black">
        <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Universe&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={showToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto gap-3">
            <NavLink to="/" className="nav-link text-white" onClick={closeToggle}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link text-white" onClick={closeToggle}>
              About
            </NavLink>
            <NavLink to="/reservation" className="nav-link text-white" onClick={closeToggle}>
              Reservation
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
