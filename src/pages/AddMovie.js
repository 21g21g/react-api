import React, { useState } from "react";

const AddMovie = () => {
  const [add, setAdd] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    //    const response= async fetch("https//:this is the API end points",{
    //         method:"POST",
    //         body:JSON.stringify(add);

    //         const data=await response.JSON();
    //         console.log(data)
    //     })
    //     console.log(add);
  };
  const handleChange = (event) => {
    setAdd((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <div
          className="container-fluid d-flex flex-column justify-content-center align-item-center"
          style={{ backgroundColor: "darkblue" }}
        >
          <input
            className="form-control"
            type="text"
            placeholder="title"
            name="title"
            value={add.title}
            onChange={handleChange}
          />
          <textarea
            className="form-control"
            typeof="text"
            placeholder="opening text"
            name="openingText"
            value={add.openingText}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            placeholder="releaseDate"
            name="releaseDate"
            value={add.releaseDate}
            onChange={handleChange}
          />
        </div>
        <div className="container d-flex justify-content-center align-item-center">
          <button className="btn btn-primary  ">add movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
