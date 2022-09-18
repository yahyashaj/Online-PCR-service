import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
function AdminControl() {
  const { labId } = useParams();
  const [labAppointments, setLabAppointments] = useState([]);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/labs/getAllAppointments/${labId}`)
      .then((data) => {
        setLabAppointments(data.data);
      })
      .catch((err) => {
        console.log("hello form err", err);
      });
  }, []);

  const updateStatus = (status, appointmentId) => {
    axios
      .post(
        `http://localhost:3001/appointments/updateStatus/${appointmentId}`,
        { status }
      )
      .then((res) => {
        console.log("hello from res");
      })
      .catch((err) => {
        console.log("you have an error ");
      });
  };

  const setResult = (result, appointmentId) => {
    axios
      .post(`http://localhost:3001/appointments/setResult/${appointmentId}`, {
        result,
      })
      .then((res) => {
        console.log("hello from res");
      })
      .catch((err) => {
        console.log("you have an error ");
      });
  };

  return (
    <>
      {/* <div className="header">
        <div className="container">
          <div className="navbar">
            <img src={require("../image/pcr.png")} alt="first img" />
            <h2>
              OnLine<span>PCR</span>
            </h2>
            <div className="para-2">
              <Link to="/">BACK</Link>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar />

      <div className="container userProfile">
        {/* <div className="userInfo">
          <h1>Mohammad khaled</h1>
          <h2>078987657</h2>
        </div> */}

        <div className="appointment-info">
          <h2>Appointments</h2>
          <table>
            <tr>
              <th>User Name </th>
              <th>User Phone </th>
              <th>Date</th>
              <th>Time</th>
              <th>Place</th>
              <th>Status</th>
              <th>Result</th>
            </tr>
            {labAppointments.map((appointment) => (
              <tr>
                <td>
                  {appointment?.first_name} {appointment?.last_name}
                </td>
                <td>{appointment?.number_phone}</td>
                <td>{appointment?.date}</td>
                <td>{appointment?.time}</td>
                <td>{appointment?.place}</td>

                <td>
                  {appointment?.status ? (
                    appointment.status
                  ) : (
                    <>
                      <button
                        className="accept"
                        onClick={() => {
                          updateStatus("Accepted", appointment.appointment_id);
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="reject"
                        onClick={() =>
                          updateStatus("Rejected", appointment.appointment_id)
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {appointment?.status === "Accepted" &&
                  appointment.result === null ? (
                    <>
                      <button
                        className="accept"
                        onClick={() => {
                          setResult("Negative", appointment.appointment_id);
                        }}
                      >
                        Negative
                      </button>
                      <button
                        className="reject"
                        onClick={() => {
                          setResult("Positive", appointment.appointment_id);
                        }}
                      >
                        Positive
                      </button>
                    </>
                  ) : (
                    appointment.result
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <footer>
        <div className="container">
          A gift to Al al-Bayt University / College of Information Technology
        </div>
      </footer>
    </>
  );
}
export default AdminControl;
