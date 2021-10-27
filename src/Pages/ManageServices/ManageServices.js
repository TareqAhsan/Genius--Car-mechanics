import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("https://infinite-temple-97581.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  const handleDelete = (id) => {
    const url = `https://infinite-temple-97581.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted success");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div className="my-5 container">
      {services?.map((service) => (
        <div key={service._id}>
          <h2>{service.name}</h2>
          <button onClick={() => handleDelete(service._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
