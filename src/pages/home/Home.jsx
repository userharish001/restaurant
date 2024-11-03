import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Navbar,
  Nav,
} from "react-bootstrap";
import b1 from "/b1.jpg";
import b3 from "/b3.jpg";
import b4 from "/b4.jpg";
import b5 from "/b5.jpg";
import b6 from "/b6.jpg";
import b7 from "/b7.jpg";
import p1 from "/p1.jpg";
import p2 from "/p2.jpg";
import p3 from "/p3.jpg";
import p4 from "/p4.jpg";
import p5 from "/p5.jpg";
import p6 from "/p6.jpg";
import p7 from "/p7.jpg";
import p8 from "/p8.jpg";
import sal1 from "/sal1.jpg";
import sal2 from "/sal2.jpg";
import sal3 from "/sal3.jpg";
import sal5 from "/sal5.jpg";
import sal6 from "/sal6.jpg";
import sal7 from "/sal7.jpg";
import Herol from "../../components/Herol";
import Footer from "../../components/Footer";

const items = [
  // Burgers
  {
    id: 1,
    title: "Classic Chicken Burger",
    image: b1,
    description:
      "A juicy chicken patty with lettuce, tomato, and mayo in a soft bun.",
    category: "Burger",
  },
  {
    id: 3,
    title: "Crispy Chicken Burger",
    image: b3,
    description:
      "Crispy fried chicken patty with cheese, lettuce, and mayo in a sesame bun.",
    category: "Burger",
  },
  {
    id: 4,
    title: "Veg Classic Burger",
    image: b4,
    description:
      "A delicious veggie patty with lettuce, tomato, and cheese in a soft bun.",
    category: "Burger",
  },
  {
    id: 5,
    title: "Mushroom Cheese Burger",
    image: b5,
    description:
      "Sautéed mushrooms and melted cheese over a juicy burger patty.",
    category: "Burger",
  },
  {
    id: 6,
    title: "Paneer Makhani Burger",
    image: b6,
    description:
      "Grilled paneer slices with creamy makhani sauce and fresh veggies.",
    category: "Burger",
  },
  {
    id: 7,
    title: "Grilled Chicken Burger",
    image: b7,
    description:
      "Perfectly grilled chicken patty with a blend of herbs, topped with veggies.",
    category: "Burger",
  },

  // Pizzas
  {
    id: 8,
    title: "Pepperoni Pizza",
    image: p1,
    description:
      "Classic pepperoni pizza topped with mozzarella cheese and pepperoni slices.",
    category: "Pizza",
  },
  {
    id: 9,
    title: "Margherita Pizza",
    image: p2,
    description:
      "A simple Margherita pizza with fresh mozzarella, tomatoes, and basil.",
    category: "Pizza",
  },
  {
    id: 10,
    title: "BBQ Chicken Pizza",
    image: p3,
    description:
      "BBQ chicken, onions, and melted cheese on a crispy pizza base.",
    category: "Pizza",
  },
  {
    id: 11,
    title: "Veggie Supreme Pizza",
    image: p4,
    description:
      "Loaded with fresh veggies like bell peppers, onions, and olives on a cheesy base.",
    category: "Pizza",
  },
  {
    id: 12,
    title: "Paneer Tikka Pizza",
    image: p5,
    description:
      "Paneer tikka cubes with spicy sauce and cheese on a soft pizza crust.",
    category: "Pizza",
  },
  {
    id: 13,
    title: "Spicy Chicken Pizza",
    image: p6,
    description:
      "A fiery chicken pizza with spicy marinara sauce and jalapeños.",
    category: "Pizza",
  },
  {
    id: 14,
    title: "Four Cheese Pizza",
    image: p7,
    description:
      "A blend of four types of cheese for the ultimate cheesy experience.",
    category: "Pizza",
  },
  {
    id: 15,
    title: "Classic Veg Pizza",
    image: p8,
    description:
      "A classic pizza topped with fresh veggies and mozzarella cheese.",
    category: "Pizza",
  },

  // Salads
  {
    id: 16,
    title: "Vegetable Salad",
    image: sal1,
    description:
      "A fresh mix of lettuce, cucumber, tomato, and carrots with a light vinaigrette.",
    category: "Salad",
  },
  {
    id: 17,
    title: "Caesar Salad",
    image: sal2,
    description:
      "Crisp romaine lettuce, croutons, and parmesan cheese with Caesar dressing.",
    category: "Salad",
  },
  {
    id: 18,
    title: "Greek Salad",
    image: sal3,
    description:
      "Tomatoes, cucumbers, olives, and feta cheese tossed with a Greek vinaigrette.",
    category: "Salad",
  },
  {
    id: 19,
    title: "Chicken Caesar Salad",
    image: sal5,
    description:
      "Grilled chicken on a bed of romaine lettuce with Caesar dressing and croutons.",
    category: "Salad",
  },
  {
    id: 20,
    title: "Fruit Salad",
    image: sal6,
    description:
      "A refreshing mix of seasonal fruits topped with a honey lime dressing.",
    category: "Salad",
  },
  {
    id: 21,
    title: "Pasta Salad",
    image: sal7,
    description:
      "Penne pasta tossed with fresh veggies, olive oil, and Italian herbs.",
    category: "Salad",
  },
];

const Home = () => {
  const [category, setCategory] = useState("All");

  const handleClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <>
        <Herol/>
      <Container className="mt-4">
        <Row>
          <h3 style={{ textDecoration: "underline" }}>
            Try out our best Dishes <Badge bg="danger">New</Badge>
          </h3>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 p-1 bg-warning"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    href="#"
                    className={category === "All" ? "active" : ""}
                    onClick={() => handleClick("All")}
                  >
                    All
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className={category === "Burger" ? "active" : ""}
                    onClick={() => handleClick("Burger")}
                  >
                    Burger
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className={category === "Pizza" ? "active" : ""}
                    onClick={() => handleClick("Pizza")}
                  >
                    Pizza
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className={category === "Salad" ? "active" : ""}
                    onClick={() => handleClick("Salad")}
                  >
                    Salad
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {filteredItems.map((list) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={list.id}>
              <Card style={{ width: "100%" }} className="cards">
                <div
                  style={{ width: "100%", height: "200px", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={list.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{list.title}</Card.Title>
                  <Card.Text>{list.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
        <Footer/>
    </>
  );
};

export default Home;
