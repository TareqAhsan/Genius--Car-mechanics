import React from "react";
import { useState, useEffect } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container id="services" className="my-5">
      <h1 className="text-dark my-4 text-center">OUR SERVICES</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
