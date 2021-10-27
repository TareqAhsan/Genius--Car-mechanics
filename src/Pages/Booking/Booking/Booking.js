import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceid } = useParams();
  const [service,setService] = useState();
  useEffect(()=>{
    fetch(`https://infinite-temple-97581.herokuapp.com/${serviceid}`)
    .then(res=>res.json())
    .then(data=>setService(data))
  },[])
  return (
    <div>
      <h1 className="my-5 text-center py-5">this is booking {serviceid}</h1>
      <h2>{service?.name}</h2>
    </div>
  );
};

export default Booking;
