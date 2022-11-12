import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { NavLink } from 'react-router-dom';
const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NDBSSC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#">
                Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Syllabus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Teaching Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Non-Teaching Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Notice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link type="submit" className="btn btn-outline-light" to="/login">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default NavHeader;
