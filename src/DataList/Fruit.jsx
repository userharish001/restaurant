import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, } from "react-bootstrap"; // Added Container and Row, Col from bootstrap
import ananas from "/ananas.jpeg";
import anar from "/anar.jpg";
import apple from "/apple.webp";
import banana from "/banana.jpeg";
import blackgrapes from "/blackgrapes.jpeg";
import cherry from "/cherry.jpeg";
import kiwi from "/kiwi.jpg";
import mango from "/mango.jpg";
import orange from "/orange.webp";
import papita from "/papita.jpeg";
import strawbery from "/strawbery.webp";
import watermelon from "/watermelon.jpg";

const list = [
  { id: 1, name: "Ananas", image: ananas },
  { id: 2, name: "Anar", image: anar },
  { id: 3, name: "Apple", image: apple },
  { id: 4, name: "Banana", image: banana },
  { id: 5, name: "Blackgrapes", image: blackgrapes },
  { id: 6, name: "Cherry", image: cherry },
  { id: 7, name: "Kiwi", image: kiwi },
  { id: 8, name: "Mango", image: mango },
  { id: 9, name: "Orange", image: orange },
  { id: 10, name: "Papita", image: papita },
  { id: 11, name: "Strawbery", image: strawbery },
  { id: 12, name: "Watermelon", image: watermelon },
];

export default function Fruit({ data }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Extract the required nutritional info from the data
      const res = data.map((item) => item.nutritions);
      setResult(res); // Update state with nutritional info
    };

    fetchData(); // Call fetchData when component is mounted
  }, [data]); // Dependency array includes `data` to avoid re-render loops

  return (
    <>
      <Container>
        <Row>
          {list.map((item, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={item.id}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "200px", objectFit: "cover" }}
                  src={item.image}
                  loading="lazy" // Lazy load the image for better performance
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  {result[idx] && (
                    <>
                      <Card.Text>Calories : {result[idx].calories}</Card.Text>
                      <Card.Text>Fat : {result[idx].fat}</Card.Text>
                      <Card.Text>
                        Carbohydrates : {result[idx].carbohydrates}
                      </Card.Text>
                      <Card.Text>Sugar : {result[idx].sugar}</Card.Text>
                      <Card.Text>Protein : {result[idx].protein}</Card.Text>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
