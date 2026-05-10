import React, { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";

/* COMPONENTS */

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

/* PAGES */

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

function App() {

  const [students, setStudents] = useState([]);

  // REFRESH -> HOME PAGE
  useEffect(() => {

    window.history.replaceState(
      null,
      "",
      "/"
    );

  }, []);

  // ADD STUDENT
  const addStudent = (student) => {

    setStudents([
      ...students,
      student
    ]);

  };

  // DELETE STUDENT
  const deleteStudent = (index) => {

    const updatedStudents = students.filter(
      (_, i) => i !== index
    );

    setStudents(updatedStudents);
  };

  return (

    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      <div className="layout">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="content">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* DASHBOARD */}
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  students={students}
                />
              }
            />

            {/* ADD STUDENT */}
            <Route
              path="/add"
              element={
                <AddStudent
                  addStudent={addStudent}
                />
              }
            />

            {/* STUDENTS */}
            <Route
              path="/students"
              element={
                <Students
                  students={students}
                  deleteStudent={deleteStudent}
                />
              }
            />

            {/* TEACHERS */}
            <Route
              path="/teachers"
              element={<Teachers />}
            />

            {/* ATTENDANCE */}
            <Route
              path="/attendance"
              element={<Attendance />}
            />

            {/* COURSES */}
            <Route
              path="/courses"
              element={<Courses />}
            />

            {/* EVENTS */}
            <Route
              path="/events"
              element={<Events />}
            />

            {/* GALLERY */}
            <Route
              path="/gallery"
              element={<Gallery />}
            />

            {/* PROFILE */}
            <Route
              path="/profile"
              element={<Profile />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

          {/* FOOTER */}
          <Footer />

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;