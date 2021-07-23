import React, { useEffect, useState } from 'react'
import NavbarBrand from '../components/navbarBrand'
import NavbarBeforeSignUp from '../components/navbarBeforeSignUp'
import Calendar from 'react-calendar'
import { Button } from 'react-bootstrap'
import CongratsPopup from './congratspopup'

const BookMock = (props) => {
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
  console.log('till here');
  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };
  const [popUp, setPopUp] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState();
  const [slots, setSlots] = React.useState([]);
  const { match: { params: { mentorId } } } = props;
  const user_email = localStorage.getItem('user_email');
  console.log('user_email', user_email)
  const sendToBackend = () => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateString = year + "-" + month + "-" + day;
    fetch('https://heypm-backend-demo.herokuapp.com/interviewWithMentor/generatemeetlink', {
      method: "POST", headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "user_email": user_email,
        "mentor_id": mentorId,
        "date": dateString,
        "time": time
      })
    })
  }

  const onChange = (value) => {
    setDate(value);
    let day = value.getDate();
    let month = value.getMonth() + 1;
    let year = value.getFullYear();
    let dateString = year + "-" + month + "-" + day;
    fetch('https://heypm-backend-demo.herokuapp.com/interviewWithMentor/get_timing', {
      method: "POST", headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "mentor_id": mentorId,
        "date": dateString
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        setSlots(data);
      }
      );
  }

  React.useEffect(() => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateString = year + "-" + month + "-" + day;
    fetch('https://heypm-backend-demo.herokuapp.com/interviewWithMentor/get_timing', {
      method: "POST", headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "mentor_id": mentorId,
        "date": dateString
      })
    })
  }, [])

  return (
    <div className="pt-2 pl-5 pr-5 pb-4" id="book-interview">
      <div>
        {isAuthenticated ? <NavbarBrand setAuth={setAuth} /> : <NavbarBeforeSignUp page='/bookMock' />}
      </div>
      <div className="row">
        <div className="col-6">
          <div className="heading-starting pt-4 pl-4" style={{ "color": "black", "font": "Poppins" }}>
            Book a Mock Interview
          </div>
          <div className="pl-3">
            <Calendar
              onChange={(value) => onChange(value)}
              value={date}
            />
          </div>
          {/* timing */}
        </div>
        <div className="col-6 pt-4" >
          <div id="set-time" >
            <div style={{ "textAlign": "center", borderBottom: " 1px solid #7B61FF", backgroundColor: "#d1c9f7", borderTopRightRadius: "8px", borderTopLeftRadius: "8px", padding: "8px" }}>
              <div style={{ "fontSize": "13px" }}>
                Time slots Available
              </div>
              <div style={{ "color": "rgb(28, 134, 35)", "fontSize": "15px", "fontWeight": "bold" }}>
                {date.toDateString()}
              </div>
            </div>
            <div className="row pt-1 pl-2 pb-2 pr-2">
              {(Object.keys(slots).length > 0) ? Object.keys(slots).map(each => {
                if (slots[each]) {
                  return <div className="col" style={{ "textAlign": "center" }} ><Button id="btn-outline" onClick={() => { setTime(slots[each]) }} className="btn m-2 primary bg-light pt-0 pb-0" >{slots[each]}</Button></div>
                } else {
                  return <React.Fragment></React.Fragment>
                }
              }) :
                <div style={{ "textAlign": "center" }} >Choose another Day no time slots are available</div>
              }
            </div>
          </div>

          <div className="p-5" >
            <Button style={{ "text-align": "center", "minWidth": "180px" }} onClick={sendToBackend(), () => {
              setPopUp(true)
            }} id="btn-practice" >Schedule</Button>
            <CongratsPopup
              show={popUp}
              time={time}
              value={date}
              mentor_id={mentorId}
              onHide={() => setPopUp(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookMock