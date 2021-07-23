import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/navBrand.png';
import { toast } from 'react-toastify';

const Login = (props) => {
  const history = useHistory();
  console.log(props.page)
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      console.log('entering login');
      const response = await fetch(
        "https://heypm-backend-demo.herokuapp.com/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      console.log('2nd');

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        localStorage.setItem("user_email", email);
        console.log('entered here');
        props.setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        console.log('unfortunate')
        props.setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Modal
      {...props}
      size="sm"
      style={{ "text-align": "center" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-4" id="nav-brand" style={{ "text-align": "center", "fontSize": "30px" }} >prep4<span style={{ "fontSize": "30px" }} className="span">PM</span><img src={logo} style={{ width: 40, marginTop: -7 }} /></div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="p-1 m-1"
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="p-1 m-1"
          placeholder="Password"
        />
        <button style={{ "minWidth": "190px", "color": "white", "padding": "6px" }} id="btn-practice" onClick={() => history.push(props.page), (props.onHide)}>Login</button>
      </form>
      <Link to="/signup">Register</Link>
      <div className="p-3 " style={{ "fontSize": "10px" }} >*Privacy & Security Terms*</div>
    </Modal>
  );
};

export default Login;
