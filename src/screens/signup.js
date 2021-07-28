import React, { Fragment, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from "../assets/navBrand.png";
import { toast } from "react-toastify";
import image from "../assets/signup.png";

const Signup = ({ setAuth }) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    educational_qualification: "",
    curr_designation: "",
    curr_organisation: "",
    domain: "",
    skills: "",
    experience: "",
    password: "",
    retype_password: "",
  });

  const {
    name,
    email,
    educational_qualification,
    curr_designation,
    curr_organisation,
    domain,
    skills,
    experience,
    password,
    retype_password,
  } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        educational_qualification,
        curr_designation,
        curr_organisation,
        domain,
        skills,
        experience,
        password,
      };
      const response = await fetch(
        "https://heypm-backend-demo.herokuapp.com/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="p-3">
      <div className="row pl-3" style={{ "text-align": "center" }}>
        <div className=" col-4">
          <div
            type="button"
            className="p-4"
            onClick={() => history.push("/")}
            id="nav-brand"
            style={{ "text-align": "left", fontSize: "50px" }}
          >
            prep4
            <span style={{ fontSize: "50px" }} className="span">
              PM
            </span>
            <img src={logo} style={{ width: 60, marginTop: -7 }} />
          </div>
          <div
            className="p-4"
            style={{ "text-align": "left", fontSize: "30px" }}
          >
            Become a Part of <strong>PM</strong> Community.
          </div>
          <img
            className="pr-3"
            id="img-job-interview"
            src={image}
            alt="signup image"
          />
        </div>
        <div
          className=" col-7 main"
          style={{
            "box-shadow":
              "-4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
            "border-radius": "10px",
          }}
        >
          <form onSubmit={onSubmitForm}>
            <div className="row">
              <div className="col-6">
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="name" className="pr-4">
                    *Name:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="email" className="pr-4">
                    *Email:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Education" className="pr-4">
                    *Education Qualification:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Designation" className="pr-4">
                    *Current Designation:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Organization" className="pr-4">
                    *Current Organization:
                  </label>
                </div>

                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Domain" className="pr-4">
                    Domain:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Skills" className="pr-4">
                    Skills:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Experience" className="pr-4">
                    *Total Experience:
                  </label>
                </div>

                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Password" className="pr-4">
                    *Password:
                  </label>
                </div>
                <div style={{ "text-align": "right" }} className="p-1">
                  <label for="Retype Password" className="pr-4">
                    *Retype Password:
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="educational_qualification"
                    value={educational_qualification}
                    placeholder="e.g : M.Tech, B.Tech"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="curr_designation"
                    value={curr_designation}
                    placeholder="e.g : Developer"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="curr_organisation"
                    value={curr_organisation}
                    placeholder="e.g : Google, amazon"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="domain"
                    value={domain}
                    placeholder="e.g: Development. Database"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    type="text"
                    name="skills"
                    style={{ paddingTop: "3px" }}
                    value={skills}
                    placeholder="e.g: Javascript, React"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    type="text"
                    name="experience"
                    style={{ paddingTop: "3px" }}
                    value={experience}
                    placeholder="e.g: 1, 3 ,10"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    type="password"
                    name="password"
                    style={{ paddingTop: "3px" }}
                    value={password}
                    placeholder="password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div style={{ "text-align": "left" }} className="p-1">
                  <input
                    type="password"
                    name="retype_password"
                    style={{ paddingTop: "3px" }}
                    value={retype_password}
                    placeholder="retype password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="pt-1 pl-3">
              <input type="checkbox"></input> I agree to the{" "}
              <a href="url">Terms</a> of use and{" "}
              <a href="url">Privacy Policy.</a>
            </div>
            <div className="pt-3" style={{ "text-align": "center" }}>
              <button
                style={{ minWidth: "190px", color: "white", padding: "6px" }}
                id="btn-practice"
              >
                Sign Up
              </button>
              <a className="pl-2" href="url">
                Learn More
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
