import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceid } = useParams();
  return (
    <div>
      <h1 className="my-5 text-center py-5">this is booking {serviceid}</h1>
    </div>
  );
};

export default Booking;
