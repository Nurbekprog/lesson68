import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto w-50 bg-danger card">
      <div className="card-title">
        <h2 className="text-center text-white py-2">New Task</h2>
      </div>
      <div className=" card-body ">
        <div className="form-control d-flex gap-2">
          <input
            type="text"
            id="newTask"
            className="form-control"
            placeholder="New Task..."
          />
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
