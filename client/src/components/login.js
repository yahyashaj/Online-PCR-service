import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Navbar from "./Navbar";

function Login() {
  const [user_phone, setuser_phone] = useState("");
  const [user_password, setuser_password] = useState("");
  const [error, setError] = useState("");

  const checkUsers = () => {
    const data = { user_phone, user_password };
    axios
      .post("http://localhost:3001/users/login", data)
      .then(
        (res) => {
          console.log("res", res);
          const decodedToken = jwt_decode(res.data);
          localStorage.setItem("userId", decodedToken.id);
          localStorage.setItem("role", decodedToken.role);
          localStorage.setItem("labId", decodedToken.labId);

          localStorage.setItem("token", res.data);

          if (
            localStorage.getItem("token") &&
            localStorage.getItem("role") === "user"
          ) {
            console.log("hello from user");
            window.location = `/userProfile`;
          } else if (
            localStorage.getItem("token") &&
            localStorage.getItem("role") === "Admin"
          ) {
            window.location.href = `/adminControl/${localStorage.getItem(
              "labId"
            )}`;
          } else if (
            localStorage.getItem("token") &&
            localStorage.getItem("role") === "Super Admin"
          ) {
            console.log("hello from super Admin");
            window.location.href = `/createLab`;
          } else {
            window.location.href = `/logIn`;
          }
        },
        (res) => {
          setError(
            res?.data ? res?.data : "Your Number Phone or Password Is Invalid"
          );
        }
      )
      .catch((err) => {
        setError(
          err?.data ? err?.data : "Your Number Phone or Password Is Invalid"
        );
      });
  };
  return (
    <div>
      <Navbar />
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="user_phone"
            onChange={(e) => setuser_phone(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="user_password"
            onChange={(e) => setuser_password(e.target.value)}
            required
          />
          <input type="button" value="Submit" onClick={checkUsers} />
        </form>
        {error && (
          <div class="error-message">
            <span>{error}</span>
          </div>
        )}
      </div>
      <p className="para-2">
        Not have an account? <Link to="/SignUp">Sign Up Here</Link>
      </p>
    </div>
  );
}
export default Login;
