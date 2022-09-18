import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function UserProfile() {
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  // console.log("userId ", userId);
  const requestData = async () => {
    const userId = window.localStorage.getItem("userId");
    const res = await axios
      .get(`http://localhost:3001/users/userProfile/${userId}`)
      .then((res) => {
        setAppointmentsInfo(res.data);
      })
      .catch((err) => {
        console.log("hello form err", err);
      });
    console.log("res", res);
  };

  useEffect(() => {
    requestData();
  }, []);

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
        <div className="userInfo">
          <h1>Mohammad khaled</h1>
          {/* <h2>078987657</h2> */}
        </div>

        <div className="appointment-info">
          <h2>Your Appointments</h2>
          <table>
            <tr>
              <th>Lab Name </th>
              <th>Date</th>
              <th>Time</th>
              <th>Place</th>
              <th>Status</th>
              <th>Result</th>
            </tr>
            {appointmentsInfo.map((appointment) => (
              <tr>
                <td>{appointment.lab_name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.place}</td>
                <td>{appointment.status}</td>
                <td>{appointment.result}</td>
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
export default UserProfile;
