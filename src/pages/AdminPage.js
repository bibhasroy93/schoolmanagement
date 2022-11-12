import React from "react";
import { Link } from "react-router-dom";
const AdminPage = () => {
  return (
    <div>
      <div>Admin Page</div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add New Student</h5>
          <p className="card-text">Click here to add student details.</p>
          <Link to="/addStudent" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">View Student Details</h5>
          <p className="card-text">Click here to view student details.</p>
          <Link to="/viewStudent" className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
