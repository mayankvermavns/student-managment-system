import React, { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    addStudent({ name, course });

    setName("");
    setCourse("");
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>

    </form>
  );
}

export default StudentForm;