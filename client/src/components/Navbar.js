import { useState } from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  const [labs, setLabs] = useState([]);
  const currentLocation = location.pathname;

  const isUser = window.localStorage.getItem("role") === "user";
  const labId = window.localStorage.getItem("labId");
  const isAdmin = window.localStorage.getItem("role") === "Admin";
  const isSuperAdmin = window.localStorage.getItem("role") === "Super Admin";
  const isLoggedIn = window.localStorage.getItem("token") !== null;

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="flex">
              <img src={require("../image/pcr.png")} alt="first img" />
              <h2>
                OnLine<span>PCR</span>
              </h2>
            </Link>

            <nav>
              {<Link to="/">Home</Link>}

              {currentLocation === "/" && (
                <>
                  <a href="#aboutUs">About</a>
                  <a href="#labs">Our Labs</a>
                </>
              )}
              {isUser && <Link to="/userProfile">My Profile</Link>}
              {isAdmin && (
                <Link to={`/adminControl/${labId}`}>Appointments</Link>
              )}
              {isSuperAdmin && <Link to={`/createLab`}>Adding Lab</Link>}
            </nav>

            <div className="para-2">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">Login</Link>
                  {/* <Link to="/SignUp">
                    <a>/</a>Sign Up
                  </Link> */}
                </>
              ) : (
                <Link to="/" onClick={logOut}>
                  Log Out
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">Made with love By Yahya shajrawi</div>
      </footer>
    </>
  );
}
export default Home;

function logOut() {
  window.localStorage.clear();
  window.location = "/";
}
