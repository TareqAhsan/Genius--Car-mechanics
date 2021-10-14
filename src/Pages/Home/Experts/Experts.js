import React from "react";
import Expert from '../Expert/Expert'
import { Container,Row } from "react-bootstrap";
import one from "../../../images/mechanic/1.jpg";
import two from "../../../images/mechanic/2.jpg";
import three from "../../../images/mechanic/3.jpg";
import four from "../../../images/mechanic/4.jpg";
import five from "../../../images/mechanic/5.jpg";
import six from "../../../images/mechanic/6.jpg";
import seven from "../../../images/mechanic/7.jpg";
const experts = [
  { name: "mike", img: one, expertize: "Engine-expert" },
  { name: "nike", img: two, expertize: "service-expert" },
  { name: "anderson", img: three, expertize: "modification-expert" },
  { name: "Karlos", img: four, expertize: "polish-expert" },
  { name: "martin", img: five, expertize: "Alrounder-expert" },
  { name: "bobby", img: six, expertize: "car-making-expert" },
  { name: "john", img: seven, expertize: "interior-expert" },
];
const Experts = () => {
  return (
    <Container id="experts" className="my-5">
      <h1 className="text-uppercase my-4 text-danger text-center">our Experts</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {experts.map((expert) => (
          <Expert key={expert.name} expert={expert}></Expert>
        ))}
      </Row>
    </Container>
  );
};

export default Experts;
