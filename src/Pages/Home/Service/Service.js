import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDollarSign,
  faClock,
  faCar,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Service.css";
import { Link } from "react-router-dom";
const dollar = <FontAwesomeIcon icon={faDollarSign} />;
const clock = <FontAwesomeIcon icon={faClock} />;
const car = <FontAwesomeIcon icon={faCar} />;

const Service = ({ service }) => {
  const { name, img, price, time, description, id } = service;
  return (
    <Col>
      <Card
        style={{ backgroundColor: "cornsilk" }}
        className="border-0 shadow rounded-3"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-uppercase">
            {car} {name}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fw-bold text-uppercase">
            {clock} delivery time: {time} hours
          </Card.Text>
          <Card.Title>
            {dollar} Price: {price}
          </Card.Title>
        </Card.Body>
        <Card.Footer className="border-0 text-center">
          <Link to={`/booking/${id}`}>
            <Button variant="outline-dark">Book {name.toLowerCase()}</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
