import React, { useEffect, useState } from "react";
import database from "../utils/Firebase";

const EditDetails = (props) => {
  const initialFieldValues = {
    fname: props.location.data.fname,
    mname: props.location.data.mname,
    lname: props.location.data.lname,
    grade: props.location.data.grade,
    roll: props.location.data.roll,
    gender: props.location.data.gender,
    session: props.location.data.session,
    bloodgroup: props.location.data.bloodgroup,
    faname: props.location.data.faName,
    moname: props.location.data.moName,
    englishut1: props.location.data.englishut1,
    bengaliut1: props.location.data.bengaliut1,
    hindiut1: props.location.data.hindiut1,
    scienceut1: props.location.data.scienceut1,
    mathematicsut1: props.location.data.mathematicsut1,
    historyut1: props.location.data.historyut1,
    geographyut1: props.location.data.geographyut1,
    englishut2: props.location.data.englishut2,
    bengaliut2: props.location.data.bengaliut2,
    hindiut2: props.location.data.hindiut2,
    scienceut2: props.location.data.scienceut2,
    mathematicsut2: props.location.data.mathematicsut2,
    historyut2: props.location.data.historyut2,
    geographyut2: props.location.data.geographyut2,
    englishf: props.location.data.englishf,
    bengalif: props.location.data.bengalif,
    hindif: props.location.data.hindif,
    sciencef: props.location.data.sciencef,
    mathematicsf: props.location.data.mathematicsf,
    historyf: props.location.data.historyf,
    geographyf: props.location.data.geographyf,
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(values);
  };

  const push = (obj) => {
    //console.log(props.location.data)
    database
      .ref("Class_List")
      .child(props.location.data.grade)
      .child(props.location.data.id)
      .set(obj, (err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div>
      <div>
        <h2>Student Details</h2>
      </div>
      <div className="card_1">
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              name="fname"
              value={values.fname}
              onChange={handleInputChange}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Middle name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              name="mname"
              value={values.mname}
              onChange={handleInputChange}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              name="lname"
              value={values.lname}
              onChange={handleInputChange}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="col-md-2">
            <label for="validationCustom04" class="form-label">
              Grade
            </label>
            <select
              class="form-select"
              id="validationCustom04"
              name="grade"
              value={values.grade}
              onChange={handleInputChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
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
            <div class="invalid-feedback">Please select a GRADE</div>
          </div>
          <div class="col-md-2">
            <label for="validationCustom05" class="form-label">
              Roll No.
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              name="roll"
              value={values.roll}
              onChange={handleInputChange}
              required
            />
            <div class="invalid-feedback">Please provide a valid Roll.</div>
          </div>
          <div class="col-md-2">
            <label for="validationCustom06" class="form-label">
              Gender
            </label>
            <select
              class="form-select"
              id="validationCustom06"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>MALE</option>
              <option>FEMALE</option>
              <option>TRANSGENDER</option>
            </select>
            <div class="invalid-feedback">Please select a Gender</div>
          </div>
          <div class="col-md-2">
            <label for="validationCustom07" class="form-label">
              Session
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom07"
              name="session"
              value={values.session}
              onChange={handleInputChange}
              required
            />
            <div class="invalid-feedback">Please provide a valid session.</div>
          </div>
          <div class="col-md-2">
            <label for="validationCustom08" class="form-label">
              Blood Group
            </label>
            <select
              class="form-select"
              id="validationCustom08"
              name="bloodgroup"
              value={values.bloodgroup}
              onChange={handleInputChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB-</option>
            </select>
            <div class="invalid-feedback">Please select a Gender</div>
          </div>

          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Father's Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Father's name"
              name="faname"
              value={values.faname}
              onChange={handleInputChange}
            />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput2" class="form-label">
              Mother's Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Mother's name"
              name="moname"
              value={values.moname}
              onChange={handleInputChange}
            />
          </div>

          <div className="App">
            <h2>Academic Details</h2>
          </div>
          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">
                  SUBJECTS
                  <br />
                  (All)
                </th>
                <th scope="col">
                  1ST UNIT TEST <br />
                  Full Marks : 100
                </th>
                <th scope="col">
                  2ND UNIT TEST <br />
                  Full Marks : 100
                </th>
                <th scope="col">
                  ANNUAL TEST <br />
                  Full Marks : 100
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ENGLISH</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput3"
                      placeholder="English Marks of 1st UT"
                      name="englishut1"
                      value={values.englishut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput4"
                      placeholder="English Marks of 2nd UT"
                      name="englishut2"
                      value={values.englishut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput5"
                      placeholder="English Marks of Final"
                      name="englishf"
                      value={values.englishf}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">BENGALI</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput6"
                      placeholder="Bengali Marks of 1st UT"
                      name="bengaliut1"
                      value={values.bengaliut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput7"
                      placeholder="Bengali Marks of 2nd UT"
                      name="bengaliut2"
                      value={values.bengaliut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput8"
                      placeholder="Bengali Marks of Final"
                      name="bengalif"
                      value={values.bengalif}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">HINDI</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput9"
                      placeholder="Hindi Marks of 1st UT"
                      name="hindiut1"
                      value={values.hindiut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput10"
                      placeholder="Hindi Marks of 2nd UT"
                      name="hindiut2"
                      value={values.hindiut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput11"
                      placeholder="Hindi Marks of Final"
                      name="hindif"
                      value={values.hindif}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">SCIENCE</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput12"
                      placeholder="Science Marks of 1st UT"
                      name="scienceut1"
                      value={values.scienceut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput13"
                      placeholder="Science Marks of 2nd UT"
                      name="scienceut2"
                      value={values.scienceut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput14"
                      placeholder="Science Marks of Final"
                      name="sciencef"
                      value={values.sciencef}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">MATHEMATICS</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput15"
                      placeholder="Mathematics Marks of 1st UT"
                      name="mathematicsut1"
                      value={values.mathematicsut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput16"
                      placeholder="Mathematics Marks of 2nd UT"
                      name="mathematicsut2"
                      value={values.mathematicsut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput17"
                      placeholder="Mathematics Marks of Final"
                      name="mathematicsf"
                      value={values.mathematicsf}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">HISTORY</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput18"
                      placeholder="History Marks of 1st UT"
                      name="historyut1"
                      value={values.historyut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput19"
                      placeholder="History Marks of 2nd UT"
                      name="historyut2"
                      value={values.historyut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput20"
                      placeholder="History Marks of Final"
                      name="historyf"
                      value={values.historyf}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">GEOGRAPHY</th>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput21"
                      placeholder="Geography Marks of 1st UT"
                      name="geographyut1"
                      value={values.geographyut1}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput22"
                      placeholder="Geography Marks of 2nd UT"
                      name="geographyut2"
                      value={values.geographyut2}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput23"
                      placeholder="Geography Marks of Final"
                      name="geographyf"
                      value={values.geographyf}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-grid col-2 mx-auto mb-2">
            <button className="btn btn-primary" type="submit">
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
