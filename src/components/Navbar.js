import React from "react";

function Navbar() {

  return (

    <div className="navbar">

      {/* LOGO */}
      <div className="logo">

        🎓 Student Management System

      </div>

      {/* PROFILE */}
      <div className="nav-profile">

        <img
          src="https://ui-avatars.com/api/?name=M&background=4f46e5&color=fff&size=128"
          alt="profile"
        />

        <div>

          <h4>Mayank Verma</h4>

          <p>Administrator</p>

        </div>

      </div>

    </div>

  );
}

export default Navbar;