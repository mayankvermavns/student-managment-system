import React, { useState } from "react";

function Attendance() {

  const [students, setStudents] = useState([

    {
      name:"Mayank Verma",
      status:""
    },

    {
      name:"Rahul Kumar",
      status:""
    },

    {
      name:"Aman Singh",
      status:""
    }

  ]);

  // MARK PRESENT
  const markPresent = (index) => {

    const updatedStudents = [...students];

    updatedStudents[index].status = "Present";

    setStudents(updatedStudents);
  };

  // MARK ABSENT
  const markAbsent = (index) => {

    const updatedStudents = [...students];

    updatedStudents[index].status = "Absent";

    setStudents(updatedStudents);
  };

  return (

    <div>

      <h1>
        Student Attendance
      </h1>

      <table className="student-table">

        <thead>

          <tr>

            <th>Student Name</th>

            <th>Action</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {
            students.map((student,index)=>(

              <tr key={index}>

                {/* NAME */}
                <td>

                  {student.name}

                </td>

                {/* BUTTONS */}
                <td>

                  <div className="attendance-actions">

                    <button
                      className="present-btn"
                      onClick={() =>
                        markPresent(index)
                      }
                    >

                      Present

                    </button>

                    <button
                      className="absent-btn"
                      onClick={() =>
                        markAbsent(index)
                      }
                    >

                      Absent

                    </button>

                  </div>

                </td>

                {/* STATUS COLUMN */}
                <td>

                  {
                    student.status === "Present"
                    &&

                    <span className="present-status">

                      Present

                    </span>
                  }

                  {
                    student.status === "Absent"
                    &&

                    <span className="absent-status">

                      Absent

                    </span>
                  }

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
}

export default Attendance;