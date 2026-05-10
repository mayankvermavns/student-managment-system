import React from "react";

function StudentCard({ student, index, deleteStudent }) {

  return (

    <div className="student-card">

      <div>

        <h3>{student.name}</h3>

        <p>{student.course}</p>

      </div>

      <button
        onClick={() => deleteStudent(index)}
      >
        Delete
      </button>

    </div>
  );
}

export default StudentCard;