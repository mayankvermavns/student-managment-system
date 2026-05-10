import React from "react";

function StudentList({ students, deleteStudent }) {

  return (

    <div className="student-list">

      <h2>Student List</h2>

      {
        students.length === 0 ? (
          <p>No Students Added</p>
        ) : (
          students.map((student, index) => (

            <div className="student-card" key={index}>

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

          ))
        )
      }

    </div>
  );
}

export default StudentList;