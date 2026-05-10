import React, { useState } from "react";

function Courses() {

  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [

    {
      id:1,
      name:"BCA",
      duration:"3 Years",
      fees:"₹60,000",
      details:
      "Bachelor of Computer Applications is a professional course focused on programming, web development, database and software development.",
      color:"course1"
    },

    {
      id:2,
      name:"MCA",
      duration:"2 Years",
      fees:"₹80,000",
      details:
      "Master of Computer Applications is an advanced course focused on software engineering, AI, networking and application development.",
      color:"course2"
    },

    {
      id:3,
      name:"B.Tech",
      duration:"4 Years",
      fees:"₹1,20,000",
      details:
      "Bachelor of Technology focuses on engineering concepts, coding, projects and technical problem solving.",
      color:"course3"
    },

    {
      id:4,
      name:"MBA",
      duration:"2 Years",
      fees:"₹1,00,000",
      details:
      "Master of Business Administration focuses on management, finance, marketing and business leadership.",
      color:"course4"
    }

  ];

  return (

    <div>

      <h1 className="course-title">
        Available Courses
      </h1>

      <div className="courses-grid">

        {
          courses.map((course)=>(

            <div
              className={`course-box ${course.color}`}
              key={course.id}
            >

              <h2>{course.name}</h2>

              <p>
                Duration: {course.duration}
              </p>

              <button
                onClick={() => setSelectedCourse(course)}
              >
                View Details
              </button>

            </div>

          ))
        }

      </div>

      {
        selectedCourse && (

          <div className="course-details">

            <h1>
              {selectedCourse.name}
            </h1>

            <p>
              <strong>Duration:</strong>
              {" "}
              {selectedCourse.duration}
            </p>

            <p>
              <strong>Fees:</strong>
              {" "}
              {selectedCourse.fees}
            </p>

            <p>
              <strong>Description:</strong>
              {" "}
              {selectedCourse.details}
            </p>

            <button
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>

          </div>

        )
      }

    </div>

  );
}

export default Courses;