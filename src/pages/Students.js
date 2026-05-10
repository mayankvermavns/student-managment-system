import React from "react";

function Students({ students, deleteStudent }) {

  return (

    <div>

      <h1>Students List</h1>

      <table className="student-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {
            students.map((student, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                <td>

                  <button
                    onClick={() => deleteStudent(index)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default Students;