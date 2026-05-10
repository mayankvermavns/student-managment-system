import React, { useState } from "react";

function Attendance() {

  // STUDENTS
  const [students, setStudents] = useState([
    // {
    //   name:"Mayank Verma",
    //   status:"",
    //   date:"",
    //   time:""
    // }
  ]);

  // FORM DATA
  const [studentName, setStudentName] =
    useState("");

  const [selectedDate, setSelectedDate] =
    useState("");

  // ADD STUDENT
  const addStudent = (e) => {

    e.preventDefault();

    if(studentName === ""){

      alert("Enter student name");

      return;
    }

    const newStudent = {

      name:studentName,

      status:"",

      date:selectedDate,

      time:""
    };

    setStudents([
      ...students,
      newStudent
    ]);

    setStudentName("");
  };

  // CURRENT TIME
  const getCurrentTime = () => {

    const now = new Date();

    return now.toLocaleTimeString();
  };

  // MARK PRESENT
  const markPresent = (index) => {

    const updatedStudents = [...students];

    updatedStudents[index].status =
      "Present";

    updatedStudents[index].time =
      getCurrentTime();

    setStudents(updatedStudents);
  };

  // MARK ABSENT
  const markAbsent = (index) => {

    const updatedStudents = [...students];

    updatedStudents[index].status =
      "Absent";

    updatedStudents[index].time =
      getCurrentTime();

    setStudents(updatedStudents);
  };

  return (

    <div>

      <h1>
        Student Attendance
      </h1>

      {/* FORM */}

      <div className="attendance-form">

        <form onSubmit={addStudent}>

          <input
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e)=>
              setStudentName(e.target.value)
            }
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(e)=>
              setSelectedDate(e.target.value)
            }
          />

          <button type="submit">

            Add Student

          </button>

        </form>

      </div>

      {/* TABLE */}

      <table className="student-table">

        <thead>

          <tr>

            <th>Student Name</th>

            <th>Action</th>

            <th>Status</th>

            <th>Date</th>

            <th>Time</th>

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

                {/* ACTION */}
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

                {/* STATUS */}
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

                {/* DATE */}
                <td>

                  {
                    student.date
                    ?

                    <span className="date-box">

                      📅 {student.date}

                    </span>

                    :

                    "-"
                  }

                </td>

                {/* TIME */}
                <td>

                  {
                    student.time
                    ?

                    <span className="time-box">

                      ⏰ {student.time}

                    </span>

                    :

                    "-"
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