import React from "react";

function Dashboard({ students }) {

  return (

    <div>

      <h1 className="page-title">
        Dashboard Overview
      </h1>

      <div className="dashboard-container">

        <div className="dashboard-box blue">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="dashboard-box purple">
          <h2>12</h2>
          <p>Total Courses</p>
        </div>

        <div className="dashboard-box green">
          <h2>25</h2>
          <p>Teachers</p>
        </div>

        <div className="dashboard-box orange">
          <h2>95%</h2>
          <p>Attendance</p>
        </div>

      </div>

      <div className="recent-section">

        <div className="recent-card">

          <h2>Recent Activity</h2>

          <p>New Student Added</p>
          <p>Course Updated</p>
          <p>Attendance Submitted</p>

        </div>

        <div className="recent-card">

          <h2>Admin Info</h2>

          <p>Name: Admin</p>
          <p>Role: Manager</p>
          <p>Status: Active</p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;