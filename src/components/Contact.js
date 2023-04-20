import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    email: "",
    no: "",
    note: "",
    checked: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <div className="container about">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          name="Name"
          value={data.Name}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Cell No
        </label>
        <input
          name="no"
          value={data.no}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Cell No"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Any extra note
        </label>
        <textarea
          name="note"
          value={data.note}
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="form-check">
        <input
          onChange={handleChange}
          className="form-check-input"
          name="checked"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={data.checked}
        />
        <label className="form-check-label" for="flexCheckChecked">
          Agree to terms and Conditions
        </label>
      </div>
      <button disabled={!data.checked} type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">
        Submit
      </button>
    </div>
  );
};

export default Contact;
