import React from "react";
import about from "/about.jpg";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Container className="my-5 p-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={about}
            alt="Our Restaurant"
            fluid
            rounded
            className="shadow-lg mb-4"
          />
        </Col>

        {/* Right Column with Text Content */}
        <Col md={6}>
          <Card className="border-0">
            <Card.Body>
              <h2 className="text-info">Welcome to FastBite!</h2>
              <p className="lead">
                At FastBite, we believe in serving quality fast food that
                doesn’t compromise on taste. Established in 2023, our restaurant
                has become a favorite spot for those craving delicious, freshly
                prepared meals in a welcoming environment.
              </p>
              <p>
                Our mission is to deliver an unforgettable experience with every
                bite, ensuring quality ingredients and top-notch service. From
                juicy burgers to crispy fries, our menu is designed to satisfy
                all your cravings.
              </p>
              <p>
                Join us for a quick meal or stay for a while and enjoy the warm,
                friendly atmosphere. We look forward to serving you at FastBite!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <p className="lead">
                Experience gourmet burgers crafted with fresh, locally sourced ingredients. At **Burger Bliss**, we bring together high-quality flavors and a cozy, vibrant atmosphere perfect for any occasion.
              </p>
              <p>
                From our signature juicy burgers to hand-cut fries and artisan milkshakes, every item on our menu is designed to make you savor every bite. We aim to be more than just a meal – we’re an experience for food lovers who crave the best.
              </p>
              <p>
                Whether you’re here for a quick bite or a leisurely dinner with friends, you’ll find yourself right at home at Burger Bliss.
              </p>
      </Row>
    </Container>
      <Footer/>
    </>
  );
};

export default About;
