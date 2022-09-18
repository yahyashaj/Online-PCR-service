import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import Navbar from "./Navbar";

function CreateLab() {
  const [lab_name, setLabName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [working_hours, setWorkingHours] = useState("");
  const [location, setLocation] = useState("");
  const [locationMap, setLocationMap] = useState("");
  const [costOfTest, setCostOfTest] = useState("");
  const [url, setUrl] = useState("");
  const [errLabName, setErrLabName] = useState("");
  const [errimage, seterrimage] = useState("");
  const [errdescription, setErrDescription] = useState("");
  const [errphone, seterrphone] = useState("");
  const [errworking_hours, seterrworking_hours] = useState("");
  const [errlocation, seterrlocation] = useState("");
  const [errcostOfTest, seterrcostOfTest] = useState("");
  const validate = () => {
    let errLabName = "";
    let errImage = "";
    let errDescription = "";
    let errLabPhone = "";
    let errWorkingHours = "";
    let errLocation = "";
    let errcostOfTest = "";
    // let erruser_password = "";
    if (!lab_name) {
      errLabName = "The first name is empty";
      setErrLabName(errLabName);
      return false;
    }

    if (!image) {
      errImage = "please upload the image";
      seterrimage(errImage);
      return false;
    }
    if (!description) {
      errDescription = "The description is empty";
      setErrDescription(errDescription);
      return false;
    }
    if (!phone) {
      errLabPhone = "the phone number is empty";
      seterrphone(errLabPhone);
      return false;
    }
    if (phone && phone.length !== 10) {
      errLabPhone = "the phone number must be 10";

      seterrphone(errLabPhone);
      return false;
    }
    if (!working_hours) {
      errWorkingHours = "the phone number must be 10";
      seterrworking_hours(errWorkingHours);
      return false;
    }
    if (!working_hours) {
      errWorkingHours = "the phone number must be 10";
      seterrworking_hours(errWorkingHours);
      return false;
    }
    if (!location) {
      errLocation = "the location is empty";
      seterrlocation(errLocation);
      return false;
    }

    if (!costOfTest) {
      errcostOfTest = "the cost Of Test is empty";
      seterrcostOfTest(errcostOfTest);
      return false;
    }

    return true;
  };

  const createLab = () => {
    const isvalid = validate();
    if (isvalid) {
      const data = {
        lab_name,
        description,
        url,
        phone,
        working_hours,
        location,
        locationMap,
        costOfTest,
      };

      axios
        .post("http://localhost:3001/labs/createLab", data)
        .then((dd) => {
          console.log("hello from data ", dd);
        })
        .catch((err) => {
          console.log("hello form err", err);
        });
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error, "error");
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((firstUrl) => {
            setUrl(firstUrl);
          });
      }
    );
  }

  return (
    <div>
      <Navbar />
      <div className="signup-box container">
        <h1>Sign Up for admins</h1>
        <form>
          <div>
            <label>Lab Name</label>
            <input
              type="text"
              required
              value={lab_name}
              onChange={(e) => {
                setLabName(e.target.value);
              }}
            />
            {errLabName ? <div className="error">{errLabName}</div> : null}
            {/* {errLabName && <div className="error">{errLabName}</div>} */}
            <label>Logo</label>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {errimage && <div className="error">{errimage}</div>}

            <label>Description</label>
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errdescription && <div className="error">{errdescription}</div>}
            <label>Phone Number</label>
            <input
              type="number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errphone ? <div className="error">{errphone}</div> : null}
          <div>
            <label>working_hours</label>
            <input
              type="text"
              required
              value={working_hours}
              onChange={(e) => setWorkingHours(e.target.value)}
            />
            {/* {errworking_hours && (
              <div className="error">{errworking_hours}</div>
            )} */}
            <label>Location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {errlocation && <div className="error">{errlocation}</div>}
            {/* <label>Location Map</label>
            <input
              type="text"
              required
              value={locationMap}
              onChange={(e) => setLocationMap(e.target.value)}
            /> */}
            <label>Cost Of Test</label>
            <input
              type="text"
              required
              value={costOfTest}
              onChange={(e) => setCostOfTest(e.target.value)}
            />
            {errcostOfTest && <div className="error">{errcostOfTest}</div>}
          </div>
          <input type="button" value="Submit" onClick={createLab} />
        </form>
      </div>
    </div>
  );
}
export default CreateLab;
