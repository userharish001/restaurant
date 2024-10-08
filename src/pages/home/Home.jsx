import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image, Badge, Navbar,Nav } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ban1 from "/ban1.jpg";
import ban2 from "/ban2.jpg";
import ban3 from "/ban3.jpg";
import b1 from "/b1.jpg";
import b3 from "/b3.jpg";
import b4 from "/b4.jpg";
import b5 from "/b5.jpg";
import b6 from "/b6.jpg";
import b7 from "/b7.jpg";
import i1 from "/i1.jpg";
import i2 from "/i2.jpg";
import i3 from "/i3.webp";
import i4 from "/i4.webp";
import i5 from "/i5.webp";
import logo2 from "/logo2.jpg";
import p1 from "/p1.jpg";
import p2 from "/p2.jpg";
import p3 from "/p3.jpg";
import p4 from "/p4.jpg";
import p5 from "/p5.jpg";
import p6 from "/p6.jpg";
import p7 from "/p7.jpg";
import p8 from "/p8.jpg";
import s1 from "/s1.jpg";
import s2 from "/s2.jpg";
import s3 from "/s3.jpeg";
import s4 from "/s4.webp";
import s5 from "/s5.webp";
import s6 from "/s6.webp";
import s7 from "/s7.jpg";
import so1 from "/so1.jpg";
import so2 from "/so2.jpg";
import so3 from "/so3.jpg";
import so4 from "/so4.jpg";
import so5 from "/so5.jpg";
import sal1 from "/sal1.jpg";
import sal2 from "/sal2.jpg";
import sal3 from "/sal3.jpg";
import sal5 from "/sal5.jpg";
import sal6 from "/sal6.jpg";
import sal7 from "/sal7.jpg";

const items = [
  // Burgers
  {
    id: 1,
    title: "Classic Chicken Burger",
    image: b1,
    description: "A juicy chicken patty with lettuce, tomato, and mayo in a soft bun.",
    category: "Burger",
  },
  {
    id: 2,
    title: "Green vegetables with grilled meat",
    image: s4,
    description: "Spicy and healthy sandwich with a unique taste",
    category: "Burger",
  },
  {
    id: 3,
    title: "Crispy Chicken Burger",
    image: b3,
    description: "Crispy fried chicken patty with cheese, lettuce, and mayo in a sesame bun.",
    category: "Burger",
  },
  {
    id: 4,
    title: "Veg Classic Burger",
    image: b4,
    description: "A delicious veggie patty with lettuce, tomato, and cheese in a soft bun.",
    category: "Burger",
  },
  {
    id: 5,
    title: "Mushroom Cheese Burger",
    image: b5,
    description: "Sautéed mushrooms and melted cheese over a juicy burger patty.",
    category: "Burger",
  },
  {
    id: 6,
    title: "Paneer Makhani Burger",
    image: b6,
    description: "Grilled paneer slices with creamy makhani sauce and fresh veggies.",
    category: "Burger",
  },
  {
    id: 7,
    title: "Grilled Chicken Burger",
    image: b7,
    description: "Perfectly grilled chicken patty with a blend of herbs, topped with veggies.",
    category: "Burger",
  },

  // Pizzas
  {
    id: 8,
    title: "Pepperoni Pizza",
    image: p1,
    description: "Classic pepperoni pizza topped with mozzarella cheese and pepperoni slices.",
    category: "Pizza",
  },
  {
    id: 9,
    title: "Margherita Pizza",
    image: p2,
    description: "A simple Margherita pizza with fresh mozzarella, tomatoes, and basil.",
    category: "Pizza",
  },
  {
    id: 10,
    title: "BBQ Chicken Pizza",
    image: p3,
    description: "BBQ chicken, onions, and melted cheese on a crispy pizza base.",
    category: "Pizza",
  },
  {
    id: 11,
    title: "Veggie Supreme Pizza",
    image: p4,
    description: "Loaded with fresh veggies like bell peppers, onions, and olives on a cheesy base.",
    category: "Pizza",
  },
  {
    id: 12,
    title: "Paneer Tikka Pizza",
    image: p5,
    description: "Paneer tikka cubes with spicy sauce and cheese on a soft pizza crust.",
    category: "Pizza",
  },
  {
    id: 13,
    title: "Spicy Chicken Pizza",
    image: p6,
    description: "A fiery chicken pizza with spicy marinara sauce and jalapeños.",
    category: "Pizza",
  },
  {
    id: 14,
    title: "Four Cheese Pizza",
    image: p7,
    description: "A blend of four types of cheese for the ultimate cheesy experience.",
    category: "Pizza",
  },
  {
    id: 15,
    title: "Classic Veg Pizza",
    image: p8,
    description: "A classic pizza topped with fresh veggies and mozzarella cheese.",
    category: "Pizza",
  },

  // Salads
  {
    id: 16,
    title: "Vegetable Salad",
    image: sal1,
    description: "A fresh mix of lettuce, cucumber, tomato, and carrots with a light vinaigrette.",
    category: "Salad",
  },
  {
    id: 17,
    title: "Caesar Salad",
    image: sal2,
    description: "Crisp romaine lettuce, croutons, and parmesan cheese with Caesar dressing.",
    category: "Salad",
  },
  {
    id: 18,
    title: "Greek Salad",
    image: sal3,
    description: "Tomatoes, cucumbers, olives, and feta cheese tossed with a Greek vinaigrette.",
    category: "Salad",
  },
  {
    id: 19,
    title: "Chicken Caesar Salad",
    image: sal5,
    description: "Grilled chicken on a bed of romaine lettuce with Caesar dressing and croutons.",
    category: "Salad",
  },
  {
    id: 20,
    title: "Fruit Salad",
    image: sal6,
    description: "A refreshing mix of seasonal fruits topped with a honey lime dressing.",
    category: "Salad",
  },
  {
    id: 21,
    title: "Pasta Salad",
    image: sal7,
    description: "Penne pasta tossed with fresh veggies, olive oil, and Italian herbs.",
    category: "Salad",
  },

  // Soups
  {
    id: 22,
    title: "Tomato Soup",
    image: so1,
    description: "A creamy tomato soup garnished with basil and served with croutons.",
    category: "Soup",
  },
  {
    id: 23,
    title: "Chicken Soup",
    image: so2,
    description: "A warm chicken broth with vegetables, perfect for a cozy evening.",
    category: "Soup",
  },
  {
    id: 24,
    title: "Mushroom Soup",
    image: so3,
    description: "A creamy mushroom soup made with fresh mushrooms and herbs.",
    category: "Soup",
  },
  {
    id: 25,
    title: "Sweet Corn Soup",
    image: so4,
    description: "A light and delicious sweet corn soup with hints of garlic and cilantro.",
    category: "Soup",
  },
  {
    id: 26,
    title: "Hot and Sour Soup",
    image: so5,
    description: "A spicy and tangy soup with vegetables, tofu, and chili oil.",
    category: "Soup",
  },

  // Sandwiches
  {
    id: 27,
    title: "Mango Smoothie",
    image: s1,
    description: "A refreshing mango smoothie made with fresh mango and yogurt.",
    category: "Smoothie",
  },
  {
    id: 28,
    title: "Strawberry Smoothie",
    image: s2,
    description: "A sweet strawberry smoothie with yogurt and honey.",
    category: "Smoothie",
  },

  // Ice Cream
  {
    id: 29,
    title: "Ice Cream Sundae",
    image: i1,
    description: "A classic ice cream sundae with chocolate syrup, nuts, and whipped cream.",
    category: "Ice Cream",
  },
  {
    id: 30,
    title: "Vanilla Ice Cream",
    image: i2,
    description: "Creamy vanilla ice cream served with chocolate sauce.",
    category: "Ice Cream",
  },
  {
    id: 31,
    title: "Strawberry Ice Cream",
    image: i3,
    description: "Fresh strawberry ice cream with pieces of strawberries.",
    category: "Ice Cream",
  },
  {
    id: 32,
    title: "Chocolate Ice Cream",
    image: i4,
    description: "Rich and creamy chocolate ice cream topped with chocolate chips.",
    category: "Ice Cream",
  },
  {
    id: 33,
    title: "Mango Ice Cream",
    image: i5,
    description: "Delicious mango-flavored ice cream with real mango chunks.",
    category: "Ice Cream",
  },
];


const Home = () => {
  return (
    <>
      <Container className="mt-4">
        <Row className="mb-3 bg-black w-100">
          <Col xs={12} md={6} className="text-center">
            <p className="h3 p-5 text-danger">
              "A restaurant is a fantasy—a kind of living fantasy in which
              diners are the most important members of the cast."
            </p>
            <p className="h4 text-bg-warning">
              Eating is a necessity but cooking is an art
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Image src="/logo2.jpg" alt="logo" fluid rounded />
          </Col>
        </Row>

        <Row>
          <h3 style={{ textDecoration: "underline" }}>
            Trys out our best Dishes <Badge bg="danger">New</Badge>
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
                  <Nav.Link href="#" className="active">All</Nav.Link>
                  <Nav.Link href="#" onClick={()=>handlelcick('Burger')}>Burger</Nav.Link>
                  <Nav.Link href="#">Pizza</Nav.Link>
                  <Nav.Link href="#">Salad</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {items.map((list) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={list.id}>
              <Card style={{ width: "100%" }}>
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
        <Row className="w-100 m-0">
          <Carousel slide={false} className="w-100">
            <Carousel.Item>
              <Image src={ban1} alt="banner1" className="d-block w-100" />
              <Carousel.Caption>
                <p className="text-bg-danger">
                  You got a burger and pizza on one price at 99 *only for
                  Saturday
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={ban2} alt="banner2" className="d-block w-100" />
              <Carousel.Caption>
                <p className="text-bg-warning">
                  We have provide delivery of our faviourate menu items within
                  10km free
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={ban3} alt="banner3" className="d-block w-100" />
              <Carousel.Caption>
                <p className="text-bg-secondary">
                  Within 15$ you can drink and take a meal together{" "}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default Home;
