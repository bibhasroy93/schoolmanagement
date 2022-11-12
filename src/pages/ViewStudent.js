import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import database from "../utils/Firebase";
const ViewStudent = () => {
  const initialFieldValues = {
    grade: "I",
  };
  var [values, setValues] = useState(initialFieldValues);
  var [objects, setObjects] = useState({});

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    database.ref("Class_List").on("value", (snapshot) => {
      snapshot.forEach((snapshot) => {
        var classKey = values.grade;
        console.log(classKey);
        database
          .ref("Class_List")
          .child(classKey)
          .on("value", (snapshot) => {
            if (snapshot.val() != null)
              setObjects({
                ...snapshot.val(),
              });
            //console.log(snapshot.val());
          });
      });
    });
  }, [values]);

  return (
    <div className="StudentView">
      <div>
        <h3>
          <b>Student Lists</b>
        </h3>
      </div>
      <div class="col-md-3">
        <select
          className="form-select"
          aria-label="Default select example"
          name="grade"
          value={values.grade}
          onChange={handleInputChange}
        >
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
          <option>V</option>
          <option>VI</option>
          <option>VII</option>
          <option>VIII</option>
          <option>IX</option>
          <option>X</option>
          <option>XI</option>
          <option>XII</option>
        </select>
      </div>

      <table className="table border shadow">
        <thead className="table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Class</th>
            <th scope="col">Session</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(objects).map((id) => {
            return (
              <tr key={id}>
                <td>{objects[id].fname}</td>
                <td>{objects[id].mname}</td>
                <td>{objects[id].lname}</td>
                <td>{objects[id].grade}</td>
                <td>{objects[id].session}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/viewDetails",
                      data: {
                        id,
                        grade: values.grade,
                        fullName:
                          objects[id].fname +
                          " " +
                          objects[id].mname +
                          " " +
                          objects[id].lname,
                        faName: objects[id].faname,
                        moName: objects[id].moname,
                        gender: objects[id].gender,
                        session: objects[id].session,
                        roll: objects[id].roll,
                        englishut1: objects[id].englishut1,
                        bengaliut1: objects[id].bengaliut1,
                        scienceut1: objects[id].scienceut1,
                        mathematicsut1: objects[id].mathematicsut1,
                        hindiut1: objects[id].hindiut1,
                        historyut1: objects[id].historyut1,
                        geographyut1: objects[id].geographyut1,

                        englishut2: objects[id].englishut2,
                        bengaliut2: objects[id].bengaliut2,
                        scienceut2: objects[id].scienceut2,
                        mathematicsut2: objects[id].mathematicsut2,
                        hindiut2: objects[id].hindiut2,
                        historyut2: objects[id].historyut2,
                        geographyut2: objects[id].geographyut2,

                        englishf: objects[id].englishf,
                        bengalif: objects[id].bengalif,
                        sciencef: objects[id].sciencef,
                        mathematicsf: objects[id].mathematicsf,
                        hindif: objects[id].hindif,
                        historyf: objects[id].historyf,
                        geographyf: objects[id].geographyf,
                      },
                    }}
                  >
                    <i
                      className="fa fa-eye"
                      style={{ marginRight: "10px" }}
                    ></i>
                  </Link>
                  <Link
                    to={{
                      pathname: "/editDetails",
                      data: {
                        id,
                        grade: values.grade,
                        fname: objects[id].fname,
                        mname: objects[id].mname,
                        lname: objects[id].lname,
                        faName: objects[id].faname,
                        moName: objects[id].moname,
                        gender: objects[id].gender,
                        session: objects[id].session,
                        roll: objects[id].roll,
                        englishut1: objects[id].englishut1,
                        bengaliut1: objects[id].bengaliut1,
                        scienceut1: objects[id].scienceut1,
                        mathematicsut1: objects[id].mathematicsut1,
                        hindiut1: objects[id].hindiut1,
                        historyut1: objects[id].historyut1,
                        geographyut1: objects[id].geographyut1,

                        englishut2: objects[id].englishut2,
                        bengaliut2: objects[id].bengaliut2,
                        scienceut2: objects[id].scienceut2,
                        mathematicsut2: objects[id].mathematicsut2,
                        hindiut2: objects[id].hindiut2,
                        historyut2: objects[id].historyut2,
                        geographyut2: objects[id].geographyut2,

                        englishf: objects[id].englishf,
                        bengalif: objects[id].bengalif,
                        sciencef: objects[id].sciencef,
                        mathematicsf: objects[id].mathematicsf,
                        hindif: objects[id].hindif,
                        historyf: objects[id].historyf,
                        geographyf: objects[id].geographyf,
                      },
                    }}
                  >
                    <i
                      className="fa fa-pencil"
                      style={{ marginRight: "10px" }}
                    ></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-trash"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
