import React from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <div>
        <h4>Login Page</h4>
      </div>
      <div className="cardLayout">
        <div className="card shadow">
          <div className="card-body">
            <form className="needs-validation" novalidate>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              {/* <button type="submit" className="btn btn-primary">
                Submit
              </button> */}
              <Link to="/admin" className="btn btn-primary">
              Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
