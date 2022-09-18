import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";

function CreateAppointment() {
  const [date, setdate] = useState("");
  const [place, setplace] = useState("inside");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [number_phone, setnumber_phone] = useState("");
  const [time, setTime] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const user_ID = window.localStorage.getItem("userId");
  // setUserId(userID);
  const { labId } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/users/createAppointment/${user_ID}`)
  //     .then((res) => {
  //       setUserInfo(res);
  //       console.log("hello from data ", res);
  //     })
  //     .catch((err) => {
  //       console.log("hello form err", err);
  //     });
  // }, []);
  const createAppointment = () => {
    const data = {
      labId,
      date,
      place,
      first_name,
      last_name,
      number_phone,
      user_ID,
      time,
    };
    axios
      .post("http://localhost:3001/appointments/createAppointment", data)
      .then((dd) => {
        console.log("hello from data ", dd);
      })
      .catch((err) => {
        console.log("hello form err", err);
      });
  };
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <img src={require("../image/pcr.png")} alt="2imgs" />
            <h2>
              OnLine<span>PCR</span>
            </h2>
            <h2>
              <a href="##">Help</a>
            </h2>
          </div>
        </div>
      </div>
      {/* <!-- start form --> */}
      <section id="appointment-form">
        <div className="container appointment-form">
          <form>
            <div>
              <div className="form-control">
                <label htmlFor="fname">First Name:</label>
                <input
                  type="text"
                  required
                  value={userInfo.first_name}
                  onChange={(e) => {
                    setfirst_name(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label htmlFor="lname">Last Name:</label>
                <input
                  type="text"
                  required
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="num">Number Phone:</label>
                <input
                  type="number"
                  required
                  value={number_phone}
                  onChange={(e) => setnumber_phone(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="Date">Date Of PCR:</label>
                <input
                  // {const today = new Date();}
                  type="date"
                  id="Date"
                  min={moment().format("YYYY-MM-DD")}
                  name="Date"
                  required
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="time">Time Of PCR:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="place">Place Of PCR:</label>
                <select
                  name="place"
                  id="place"
                  onChange={(e) => setplace(e.target.value)}
                >
                  <option value="Inside the lab">Inside the lab</option>
                  <option value="outside the lab">Outside the lab</option>
                </select>
              </div>
              <div className="form-control">
                <Link
                  to="/userProfile"
                  className="greenbg"
                  onClick={createAppointment}
                >
                  Book an appointment
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- endForm --> */}
    </div>
  );
}
export default CreateAppointment;
