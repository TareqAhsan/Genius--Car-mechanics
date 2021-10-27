import React from "react";
import axios from "axios";
import "./AddService.css";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://infinite-temple-97581.herokuapp.com/services", data)
      .then((res) =>{
          if(res.data.insertedId){
              alert('addeed success fully')
              reset()
          }
      });
  };
  return (
    <div className="add-service">
      <h2 className="my-5 text-center">Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <textarea {...register("description")} placeholder="desciption" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="img url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
