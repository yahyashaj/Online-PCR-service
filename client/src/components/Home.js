import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import LabData from "./adminControl";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [labs, setLabs] = useState([]);
  // const isLoggedIn = window.localStorage.getItem("token") !== null;

  useEffect(() => {
    axios
      .get("http://localhost:3001/labs")
      .then((data) => {
        setLabs(data.data);
      })
      .catch((err) => {
        console.log("hello form err", err);
      });
  }, []);
  return (
    <>
      <Navbar />

      <div className="overlay"></div>
      <div className="slider">
        <img src={require("../image/pcr1.jfif")} alt="first img" />
        <div className="search">
          <SearchBar placeholder={"Enter a Lab Name..."} data={labs} />
        </div>
      </div>

      <div className="labsList" id="labs">
        <h1>Our Labs</h1>
        <div className="container">
          {/* <ul> */}
          {labs.map((lab, index) => (
            <div className="lab" key={index}>
              <img src={lab.logo} alt="img1" />
              <h2 className="darkgray">{lab.lab_name}</h2>
              <p className="lightgray">{lab.location}</p>
              <Link
                to={`/lab/${lab.lab_id}`}
                // to={isLoggedIn ? `/lab/${lab.lab_id}` : `/login`}
                className="greenbg"
              >
                Go to lab
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <!--end labsList-->
    <!-- start details --> */}
      <div className="details">
        <div className="image">
          <img src={require("../image/pcr5.png")} alt="first img" />
        </div>
        <div className="info">
          <div className="info1 darkgray">
            <h2>Some important links about the pandemic</h2>
          </div>
          <div className="info1">
            <h4>
              To educate and learn more about the disease
              <a
                href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                className="greenfont"
              >
                click here
              </a>
            </h4>
          </div>

          <div className="info1">
            <h4>
              Some important weekly reports since the beginning of the epidemic
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports"
                className="greenfont"
              >
                Read more
              </a>
            </h4>
          </div>
          <div className="info1">
            <h4>
              Learn about vaccines and their effect
              <a
                className="greenfont"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
              >
                Press here
              </a>
            </h4>
          </div>
          <div className="info1">
            <h4>
              Illness is a disease and take the necessary precautions
              <a
                className="greenfont"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance"
              >
                Read more
              </a>
            </h4>
          </div>
          <div className="info1">
            <h4>
              COVID-19 and the use of angiotensin-converting enzyme inhibitors
              and receptor blockers
              <a
                className="greenfont"
                href="https://www.who.int/news-room/commentaries/detail/covid-19-and-the-use-of-angiotensin-converting-enzyme-inhibitors-and-receptor-blockers"
              >
                Press here
              </a>
            </h4>
          </div>
          <div className="info1">
            <h4>
              Estimating mortality from COVID-19
              <a
                className="greenfont"
                href="https://www.who.int/news-room/commentaries/detail/estimating-mortality-from-covid-19"
              >
                Press here
              </a>
            </h4>
          </div>
        </div>
      </div>

      {/* <!-- end details -->
    <!--start about us --> */}
      <div className="aboutus" id="aboutUs">
        <div className="container">
          <h1>about us</h1>
          <div>
            <p>
              Append to the new statements and changes imposed by corona
              pandemic, it was necessary to have some way to let everybody have
              their covid test much easier this project has provided a web page
              that coordinate laboratories work and make it easier for citizens
              to have their covid test
            </p>
            <h3>To join our team, contact us:0780336448</h3>
          </div>
        </div>
      </div>
      {/* 
    <!-- end about us --> */}
      <footer>
        <div className="container">
          A gift to Al al-Bayt University / College of Information Technology
        </div>
      </footer>
    </>
  );
}
export default Home;
