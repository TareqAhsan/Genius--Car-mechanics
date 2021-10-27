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
  const { name, img, price, time, description, _id } = service;
  return (
    <Col>
      <Card
        style={{ backgroundColor: "cornsilk" }}
        className="border-0 shadow rounded-3"
      >
        <Card.Img variant="top" style={{height:"350px"}} src={img} />
        <Card.Body className="text-center p-1">
          <Card.Title className="text-uppercase mb-1">
            {car} {name}
          </Card.Title>
          <Card.Text className="m-1">{description}</Card.Text>
          <Card.Text className="fw-bold text-uppercase m-1">
            {clock} delivery time: {time} hours
          </Card.Text>
          <Card.Title>
            {dollar} Price: {price}
          </Card.Title>
        </Card.Body>
        <Card.Footer className="border-0 text-center pt-0">
          <Link to={`/booking/${_id}`}>
            <Button variant="outline-dark">Book {name.toLowerCase()}</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
