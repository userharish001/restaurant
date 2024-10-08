import React from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/logo.jpg";
import { Image } from "react-bootstrap";

const Navbars = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar expand="lg" className="bg-info border-5 fixed-top">
        <Container fluid>
          <Image
            style={{
              width: 50 + "px",
              borderRadius: 100 + "%",
              padding: 5 + "px",
            }}
            src={logo}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="active" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/recipe">Food Receipe</Nav.Link>
              <Nav.Link href="/reservation">Reservation</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-white bg-primary">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Navbars;
