import React, { useEffect, useState } from "react";
import database from "../utils/Firebase";
import { Bar } from "react-chartjs-2";
const ViewDetails = (props) => {
  // var classKeyPassed=props.location.data
  // console.log(classKeyPassed);
  var [objects, setObjects] = useState({});

  useEffect(() => {
    database.ref("Class_List").on("value", (snapshot) => {
      snapshot.forEach((snapshot) => {
        var classKey = props.location.data;
        //console.log(classKey)
        database
          .ref("Class_List")
          .child(classKey.grade)
          .child(classKey.id)
          .on("value", (snapshot) => {
            if (snapshot.val() != null)
              setObjects({
                ...snapshot.val(),
              });
            //console.log(objects);
          });
      });
    });
  }, []);
  return (
    <div>
      <div>
        <h1>PRANAVANANDA VIDYAMANDIR & GAIRIK</h1>
        <h3>Chaitanya Ave, B-Zone, Durgapur, West Bengal 713205</h3>
        <h5>Phone: 0343 256 3333 E-mail: pvmdgp@gmail.com</h5>
        <h4>
          REPORT CARD FOR THE ACADEMIC SESSION {props.location.data.session}
        </h4>
        <div class="card ">
          <div class="card-body">
            <h3>
              <div class="container-fluid">
                <div class="row">
                  <div class="col">
                    <b>NAME </b>: {props.location.data.fullName}
                  </div>
                  <div class="col">
                    <b>CLASS </b>: {props.location.data.grade}
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <b>ROLL </b>: {props.location.data.roll}
                  </div>
                  <div class="col">
                    <b>GENDER </b>: {props.location.data.gender}
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <b>FATHER'S NAME </b>: {props.location.data.faName}
                  </div>
                  <div class="col">
                    <b>MOTHER'S NAME </b>: {props.location.data.moName}
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <table class="table">
            <thead>
              <tr class="table-info">
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
                <td>{props.location.data.englishut1}</td>
                <td>{props.location.data.englishut2}</td>
                <td>{props.location.data.englishf}</td>
              </tr>
              <tr>
                <th scope="row">BENGALI</th>
                <td>{props.location.data.bengaliut1}</td>
                <td>{props.location.data.bengaliut2}</td>
                <td>{props.location.data.bengalif}</td>
              </tr>
              <tr>
                <th scope="row">HINDI</th>
                <td>{props.location.data.hindiut1}</td>
                <td>{props.location.data.hindiut2}</td>
                <td>{props.location.data.hindif}</td>
              </tr>
              <tr>
                <th scope="row">SCIENCE</th>
                <td>{props.location.data.scienceut1}</td>
                <td>{props.location.data.scienceut2}</td>
                <td>{props.location.data.sciencef}</td>
              </tr>
              <tr>
                <th scope="row">MATHEMATICS</th>
                <td>{props.location.data.mathematicsut1}</td>
                <td>{props.location.data.mathematicsut2}</td>
                <td>{props.location.data.mathematicsf}</td>
              </tr>
              <tr>
                <th scope="row">HISTORY</th>
                <td>{props.location.data.historyut1}</td>
                <td>{props.location.data.historyut2}</td>
                <td>{props.location.data.historyf}</td>
              </tr>
              <tr>
                <th scope="row">GEOGRAPHY</th>
                <td>{props.location.data.geographyut1}</td>
                <td>{props.location.data.geographyut2}</td>
                <td>{props.location.data.geographyf}</td>
              </tr>

              <tr>
                <th scope="row" class="table-success">
                  TOTAL
                </th>
                <td class="table-success">
                  <b>
                    {Number(props.location.data.englishut1) +
                      Number(props.location.data.bengaliut1) +
                      Number(props.location.data.hindiut1) +
                      Number(props.location.data.scienceut1) +
                      Number(props.location.data.mathematicsut1) +
                      Number(props.location.data.historyut1) +
                      Number(props.location.data.geographyut1)}
                  </b>
                </td>
                <td class="table-success">
                  <b>
                    {Number(props.location.data.englishut2) +
                      Number(props.location.data.bengaliut2) +
                      Number(props.location.data.hindiut2) +
                      Number(props.location.data.scienceut2) +
                      Number(props.location.data.mathematicsut2) +
                      Number(props.location.data.historyut2) +
                      Number(props.location.data.geographyut2)}
                  </b>
                </td>
                <td class="table-success">
                  <b>
                    {Number(props.location.data.englishf) +
                      Number(props.location.data.bengalif) +
                      Number(props.location.data.hindif) +
                      Number(props.location.data.sciencef) +
                      Number(props.location.data.mathematicsf) +
                      Number(props.location.data.historyf) +
                      Number(props.location.data.geographyf)}
                  </b>
                </td>
              </tr>
              <tr>
                <th scope="row" class="table-success">
                  PERCENTAGE %
                </th>
                <td class="table-success">
                  <b>
                    {(
                      (Number(props.location.data.englishut1) +
                        Number(props.location.data.bengaliut1) +
                        Number(props.location.data.hindiut1) +
                        Number(props.location.data.scienceut1) +
                        Number(props.location.data.mathematicsut1) +
                        Number(props.location.data.historyut1) +
                        Number(props.location.data.geographyut1)) /
                      7
                    ).toFixed(2) + " %"}
                  </b>
                </td>
                <td class="table-success">
                  <b>
                    {(
                      (Number(props.location.data.englishut2) +
                        Number(props.location.data.bengaliut2) +
                        Number(props.location.data.hindiut2) +
                        Number(props.location.data.scienceut2) +
                        Number(props.location.data.mathematicsut2) +
                        Number(props.location.data.historyut2) +
                        Number(props.location.data.geographyut2)) /
                      7
                    ).toFixed(2) + " %"}
                  </b>
                </td>
                <td class="table-success">
                  <b>
                    {(
                      (Number(props.location.data.englishf) +
                        Number(props.location.data.bengalif) +
                        Number(props.location.data.hindif) +
                        Number(props.location.data.sciencef) +
                        Number(props.location.data.mathematicsf) +
                        Number(props.location.data.historyf) +
                        Number(props.location.data.geographyf)) /
                      7
                    ).toFixed(2) + " %"}
                  </b>
                </td>
              </tr>

              <tr>
                <th scope="row" class="table-primary">
                  <b>RESULT</b>
                </th>
                <td></td>
                <td></td>
                <td colSpan="2">
                  <b>
                    {" "}
                    {Number(props.location.data.englishf) +
                      Number(props.location.data.bengalif) +
                      Number(props.location.data.hindif) +
                      Number(props.location.data.sciencef) +
                      Number(props.location.data.mathematicsf) +
                      Number(props.location.data.historyf) +
                      Number(props.location.data.geographyf) >
                    280
                      ? "PASS"
                      : "FAIL"}{" "}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="container">
            <div class="row">
              <div class="col">
                <div style={{ maxWidth: "650px" }}>
                  <Bar
                    data={{
                      // Name of the variables on x-axies for each bar
                      labels: [
                        "ENGLISH",
                        "BENGALI",
                        "HINDI",
                        "SCIENCE",
                        "MATHEMATICS",
                        "HISTORY",
                        "GEOGRAPHY",
                      ],
                      datasets: [
                        {
                          // Label for bars
                          label: "Progress",
                          // Data or value of your each variable
                          data: [
                            props.location.data.englishf,
                            props.location.data.bengalif,
                            props.location.data.hindif,
                            props.location.data.sciencef,
                            props.location.data.mathematicsf,
                            props.location.data.historyf,
                            props.location.data.geographyf,
                          ],
                          // Color of each bar
                          backgroundColor: [
                            "aqua",
                            "green",
                            "red",
                            "yellow",
                            "blue",
                            "indigo",
                            "teal",
                          ],
                          // Border color of each bar
                          borderColor: [
                            "aqua",
                            "green",
                            "red",
                            "yellow",
                            "blue",
                            "indigo",
                            "teal",
                          ],
                          borderWidth: 0.5,
                        },
                      ],
                    }}
                    // Height of graph
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              // The y-axis value will start from zero
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                      legend: {
                        labels: {
                          fontSize: 15,
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div class="col">
                <table class="table shadow mt-4">
                  <thead>
                    <tr>
                      <th scope="col">REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Takes an active role in discussions. Consistently
                        cooperates with the teacher and other students. Listens
                        well and shares ideas frequently. Works democratically
                        with peers. Shows self-confidence in… Works well in
                        groups, planning and carrying out activities. Follows
                        directions well. Has difficulty staying focused and on
                        task. · Needs to actively participate in classroom
                        discussion. Needs to work on not distracting others
                        during class. Is learning to be careful, cooperative,
                        and fair.{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="container ">
            <div class="row">
              <div class="col-4">
                <br />
                <br />
                <br />
                <br />
                <b>Class Teacher</b>
              </div>
              <div class="col-4">
                <br />
                <br />
                <br />
                <br />
                <b>Parent's Signature</b>
              </div>
              <div class="col-4">
                <br />
                <br />
                <br />
                <br />
                <b>Principal</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
