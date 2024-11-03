import React from "react";
import { Container, Image} from "react-bootstrap";
import hero from "/banner.jpg";
import { Link } from "react-router-dom";

const Herol = () => {
  return (
    <div>
       <Container fluid>
      <Image
        src={hero}
        alt="Full Width"
        fluid
        rounded
        style={{ width: '100%', height: 'auto' }}
      />
    </Container>
    </div>
  );
};

export default Herol;
