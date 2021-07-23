import React, { useEffect } from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useState } from 'react';
import Login from '../screens/login';
import logo from '../assets/navBrand.png'
import { useHistory } from "react-router-dom";

function NavbarBeforeSignUp(props) {
  let [popUp, setPopUp] = useState(false);
  const history = useHistory();
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("https://heypm-backend-demo.herokuapp.com/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

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

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (

    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="nav-brand" className="NavBar-Brand" href="#">prep4<span className="span">PM</span><img src={logo} style={{ width: 70, marginTop: -7 }} /></Navbar.Brand>
        <div className="d-flex ml-auto pl-4" >
          <Button id="btn-practice" className=" btn m-2 primary" onClick={() => setPopUp(true)} >Login</Button>
          <Login
            {...props}
            page={props.page}
            show={popUp}
            onHide={() => setPopUp(false)}
            setAuth={setAuth}
          />
          {console.log("auth"+ isAuthenticated)}
          <Button id="btn-outline" className="btn m-2 primary bg-light" onClick={() => history.push('/signup')}>Sign Up</Button>
        </div>
      </Navbar>
    </div>
  )
}
export default NavbarBeforeSignUp;
