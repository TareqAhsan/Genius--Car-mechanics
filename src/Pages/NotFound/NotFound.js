import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fourzero from "../../images/404.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="text-center">
      <img
        style={{ height: "100vh" }}
        className="img-fluid w-100"
        src={fourzero}
        alt=""
      />
      <Link to="/">
        <Button variant="danger" className="custom text-uppercase btn-lg">
          go back
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
