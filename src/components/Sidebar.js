import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>🎓 SMS</h2>

      <Link to="/">🏠 Home</Link>

      <Link to="/dashboard">📊 Dashboard</Link>

      <Link to="/add">➕ Add Student</Link>

      <Link to="/students">👨‍🎓 Students</Link>

      <Link to="/teachers">👩‍🏫 Teachers</Link>

      <Link to="/attendance">📅 Attendance</Link>

      <Link to="/courses">📚 Courses</Link>

      <Link to="/events">🎉 Events</Link>

      <Link to="/gallery">🖼 Gallery</Link>

      <Link to="/profile">👤 Profile</Link>

      <Link to="/contact">📞 Contact</Link>

    </div>

  );
}

export default Sidebar;