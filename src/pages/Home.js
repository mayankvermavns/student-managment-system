import React from "react";

function Home() {

  return (

    <div>

      <div className="hero-section">

        <div className="overlay">

          <h1>
            Student Management System
          </h1>

          <p>
            Modern Admin Dashboard For College
          </p>

          <button>
            Get Started
          </button>

        </div>

      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <h2>500+</h2>
          <p>Total Students</p>
        </div>

        <div className="feature-card">
          <h2>25+</h2>
          <p>Courses</p>
        </div>

        <div className="feature-card">
          <h2>15+</h2>
          <p>Teachers</p>
        </div>

        <div className="feature-card">
          <h2>98%</h2>
          <p>Result Rate</p>
        </div>

      </div>

    </div>

  );
}

export default Home;