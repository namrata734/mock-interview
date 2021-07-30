import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import NavbarBeforeSignUp from "../components/navbarBeforeSignUp";
import NavbarBrand from "../components/navbarBrand";
import Testimonials from "../components/testimonials";
import { useHistory } from "react-router-dom";
import NavbarAfterSignUp from "../components/navbarAfterSignUp";
import image from "../assets/home.png";

const Home = (props) => {
  console.log("entered home");
  const history = useHistory();
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        "https://heypm-backend-demo.herokuapp.com/authentication/verify",
        {
          method: "POST",
          headers: { jwt_token: localStorage.token },
        }
      );

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("till here");
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <div className="p-4" id="home">
      {isAuthenticated ? (
        <NavbarBrand setAuth={setAuth} />
      ) : (
        <NavbarBeforeSignUp page="/" />
      )}
      {/* build actual products */}
      
      <div className="row container-fluid">
        {/* left side */}
        <div className="col-6">
          <div className="heading-starting">
            Prepare for your Product Manager career
          </div>
          <div className="text-block">
          Prepare for your Interviews and get tips from Industry's best MENTORS!
          </div>
          <div className="text-block text-1">
          Get access to curated resources for your for your PRODUCT MANAGEMENT career.
          </div>
          <div className="text-block text-2">
          No session fee for the first 50 bookings.<b>Hurry Up!</b><br></br>
          Visit our 'Interview Substack' to learn from experiences.
          </div>

          <div className="row">
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                onClick={() => history.push("/interviewWithMentor")}
              >
                Practice Ground
              </Button>
            </div>
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                href="https://heypm-interview-experience.webflow.io/"
              >
                Interview Substack
              </Button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="col-6">
          <img id="img-job-interview" src={image} alt="job interview image" />
        </div>
      </div>
      {/* testimonals */}
      <Testimonials />
      {/* links */}
      <div className="row pl-3 abc-1">
        <div className="col-4 abc-2">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScHw7xfAeZ3kiCocbeIU4vhMHrbPCWFp5lDiEegFOxCpg0USQ/viewform"
          >
            Become a Mentor
          </a>
        </div>
        <div className="col-4 abc-2">
          <a
            target="_blank"
            href="https://heypm-interview-experience.webflow.io/share-your-interview"
          >
            Submit Your Interview Experience
          </a>
        </div>

      </div>
      <div className="div-abc">
      <div className="row container-fluid top-btn">
      <div className="row">
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                href="https://heypm.glideapp.io/"
              >
                heyPM app
              </Button>
              <p className="text-block">Our app to get access to resources</p>
            </div>
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                href="https://anchor.fm/heypm"
              >
                togetherVproduct
              </Button>
              <p className="text-block">A podcast series for PM followers</p>
            </div>
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                href="https://heypm.substack.com/pm-resources"
              >
                PM Resources
              </Button>
              <p className="text-block">A repository of resources for PM</p>
            </div>
          </div>
          </div>
      </div>
    </div>
    
  );
};

export default Home;
