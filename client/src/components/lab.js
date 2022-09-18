import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
function Lab() {
  const isLoggedIn = window.localStorage.getItem("token") !== null;
  const { labId } = useParams();
  const [labInfo, setLabInfo] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/labs/${labId}`)
      .then((data) => {
        setLabInfo(data.data[0]);
        console.log("data is", data);
      })
      .catch((err) => {
        console.log("hello form err", err);
      });
  }, [labId]);
  return (
    <>
      <Navbar />
      <div className="lab-cover">
        {/* <img src={require("../image/cover1.jpg")}/> */}
      </div>
      <div className="container">
        <div className="fist-section">
          <div className="lab-logo">
            <img src={labInfo.logo} alt="img1" />
          </div>
          <div className="lab-content">
            <h1>{labInfo.lab_name}</h1>
            <p>
              <strong>Open hours :</strong> {labInfo.working_hours}
            </p>
            <p>
              <strong>Location : </strong>
              {labInfo.location}
            </p>
            <p>
              <strong>Phone number : </strong> {labInfo.phone}
            </p>
            <p>
              <strong>Cost Of Test :</strong> {labInfo.costOfTest}
            </p>
            <p>{labInfo.description}</p>

            <div className="appointment">
              <Link
                to={
                  isLoggedIn ? `/createAppointment/${labInfo.lab_id}` : `/login`
                }
                // to={`/createAppointment/${labId}`}
                className="greenbg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
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
export default Lab;
