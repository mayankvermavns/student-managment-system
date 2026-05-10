import React from "react";

function Teachers() {

  const teachers = [

    {
      name:"Rahul Sharma",
      subject:"Computer Science"
    },

    {
      name:"Priya Singh",
      subject:"Mathematics"
    },

    {
      name:"Amit Verma",
      subject:"Software Engineering"
    }

  ];

  return (

    <div>

      <h1>Teachers</h1>

      <div className="teacher-grid">

        {
          teachers.map((teacher,index)=>(

            <div className="teacher-card" key={index}>

              <img
                src={`https://i.pravatar.cc/150?img=${index+10}`}
                alt="teacher"
              />

              <h2>{teacher.name}</h2>

              <p>{teacher.subject}</p>

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Teachers;