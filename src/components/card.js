import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Login from "../screens/login";

const Card = (props) => {
  const history = useHistory();
  let [popUp, setPopUp] = useState(false);

  return (
    <div className="item-container">
      <div style={{ textAlign: "left" }}>
        <div
          id="card"
          key={props.id}
          className=""
          style={{ paddingLeft: "20%" }}
        >
          <div className="p-1">
            {/* image */}
            {/* <img id="mentor-img" src={props.image} alt="Avatar" /> */}
          </div>
          <div style={{ fontWeight: "bold" }}> Name: {props.name}</div>
          <div style={{ color: "#808080", fontSize: "13px" }}>
            <div>Company: {props.company}</div>
            <div>Experience: {props.experience} Years</div>
            <div>Domain: {props.domain}</div>
            <div>fee/session: {props.price}</div>
            <a target="_blank" href={props.linkedin}>
              linkedIn link
            </a>
          </div>
        </div>
      </div>
      <div className="btn sm " style={{ paddingLeft: "20%" }}>
        <Button
          id="btn-practice"
          style={{ padding: "3px 10px" }}
          onClick={
            props.isAuthed
              ? () => history.push("/bookMock/" + props.id)
              : () => setPopUp(true)
          }
        >
          Book
        </Button>
        <Login
          {...props}
          page={props.page}
          show={popUp}
          onHide={() => setPopUp(false)}
          setAuth={props.setAuth}
        />
      </div>
    </div>
  );
};

export default Card;
