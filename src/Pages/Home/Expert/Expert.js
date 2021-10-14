import React from "react";
import { ButtonGroup, Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  const element = <FontAwesomeIcon icon={faUser} />
  const hand = <FontAwesomeIcon icon={faHandPointRight} />
  return (
    <Col>
      <Card
        style={{ backgroundColor: "cornsilk" }}
        className="border-0 shadow rounded-3"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body className= "text-center">
          <Card.Title className="text-uppercase">{element} {name}</Card.Title>
          <Card.Text className="text-danger fw-bold">{hand} {expertize}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
