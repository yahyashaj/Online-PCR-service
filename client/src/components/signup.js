import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
function SignUp() {
  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [user_phone, setuser_phone] = useState("");
  const [user_password, setuser_password] = useState("");
  const [errfirst_name, seterrfirstname] = useState("");
  const [errlast_name, seterrlastname] = useState("");
  const [erruser_phone, seterruser_phone] = useState("");
  const [erruser_password, seterruser_password] = useState("");
  const validate = () => {
    let errfirst_name = "";
    let errlast_name = "";
    let erruser_phone = "";
    let erruser_password = "";
    if (!first_name) {
      errfirst_name = "the first name is empty";
      seterrfirstname(errfirst_name);
      return false;
    }

    if (!last_name) {
      errlast_name = "the last name is empty";
      seterrlastname(errlast_name);
      return false;
    }
    if (user_phone && user_phone.length !== 10) {
      erruser_phone = "the phone number must be 10";
      seterruser_phone(erruser_phone);
      return false;
    }
    if (user_password && user_password.length < 8) {
      erruser_password = "the password must be great than 8";
      seterruser_password(erruser_password);
      return false;
    }
    return true;
  };
  const createuser = () => {
    const isvalid = validate();
    console.log("valid valid", isvalid);
    if (isvalid) {
      const data = { first_name, last_name, user_phone, user_password };
      axios.post("http://localhost:3001/users/signUp", data).then(() => {
        console.log("hello from ");
        window.location.href = "/login";
      });
      // .then((res) => {
      //   console.log(res);
      //   console.log("wwwwwwwwwwwwww", res);
      //   window.location.href = "/login";
      // })
      // .catch((err) => {
      //   console.log("hello form err", err);
      // });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <label>First Name</label>
          <input
            type="text"
            required
            value={first_name}
            onChange={(e) => {
              const re = /^[A-Za-z]*$/;
              if (re.test(e.target.value)) {
                setfirstname(e.target.value);
              }
            }}
          />
          {errfirst_name && <div className="error">{errfirst_name}</div>}

          <label>Last Name</label>
          <input
            type="text"
            required
            value={last_name}
            onChange={(e) => {
              const re = /^[A-Za-z]*$/;
              if (re.test(e.target.value)) {
                setlastname(e.target.value);
              }
            }}
          />
          {errlast_name && <div className="error">{errlast_name}</div>}
          <label>Phone number</label>
          <input
            type="number"
            required
            value={user_phone}
            onChange={(e) => setuser_phone(e.target.value)}
          />
          {erruser_phone && <div className="error">{erruser_phone}</div>}
          <label>Password</label>
          <input
            type="password"
            required
            value={user_password}
            onChange={(e) => setuser_password(e.target.value)}
          />
          {erruser_password && <div className="error">{erruser_password}</div>}
          <input type="button" value="Submit" onClick={createuser} />
        </form>

        <p className="para-2">
          Already have an account?<Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
