import React from "react";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/Home";
import Lab from "./components/lab";
import CreateAppointment from "./components/createappointment";
import UserProfile from "./components/userProfile";
import CreateLab from "./components/createLab";
import AdminControl from "./components/adminControl";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/lab/:labId" element={<Lab />} />
        <Route
          path="/createAppointment/:labId"
          element={<CreateAppointment />}
        />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/createLab" element={<CreateLab />} />
        <Route path="/adminControl/:labId" element={<AdminControl />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}
export default App;
