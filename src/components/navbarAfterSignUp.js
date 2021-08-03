import React from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../assets/navBrand.png";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function NavbarAfterSignUp({ setAuth }) {
  const history = useHistory();

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          type="button"
          onClick={() => history.push("/")}
          id="nav-brand"
          className="NavBar-Brand"
          href="#"
        >
          prep4<span className="span">PM</span>
          <img src={logo} style={{ width: 70, marginTop: -7 }} />
        </Navbar.Brand>
        <div className="d-flex ml-auto pl-4">
          <span className="pr-2">Hi</span>
          {/* image */}
          <DropdownButton
            style={{ paddingRight: "10px" }}
            menuAlign="right"
            variant="outline-secondary"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1" tag="a" href="/interviewWithMentor">
              Practice Ground
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              tag="b"
              href="https://heypm-interview-experience.webflow.io/"
            >
              Interview Substack
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <Button
                style={{ minWidth: "180px" }}
                onClick={((e) => logout(e), () => history.push("/"))}
                id="btn-practice"
              >
                Logout
              </Button>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>
    </div>
  );
}
export default NavbarAfterSignUp;
