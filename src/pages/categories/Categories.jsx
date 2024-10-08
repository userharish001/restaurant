import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import all from "/all.jpg";

const Categories = () => {
  const navigate = useNavigate();
  function handlebutton() {
    navigate("/categories:fruits");
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={all} />
        <Card.Body>
          <div className="text-center">
          <Button variant="primary" onClick={handlebutton}>
            Fruits
          </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Categories;
