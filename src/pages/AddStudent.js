import React, { useState } from "react";

function AddStudent({ addStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(name === "" || course === "" || email === ""){
      alert("Please Fill All Fields");
      return;
    }

    addStudent({
      name,
      course,
      email
    });

    alert("Student Added Successfully");

    setName("");
    setCourse("");
    setEmail("");
  };

  return (

    <div className="add-student-page">

      <div className="form-container">

        <h1>Add New Student</h1>

        <p>
          Fill student details below
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <select
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
          >

            <option value="">
              Select Course
            </option>

            <option>BCA</option>
            <option>MCA</option>
            <option>B.Tech</option>
            <option>BBA</option>

          </select>

          <button type="submit">
            Add Student
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddStudent;