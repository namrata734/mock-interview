import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Login from '../screens/login';

const Card = (props) => {
    const history = useHistory();
    let [popUp, setPopUp] = useState(false);
   
    return (
        <div className="item-container">
            <div id="card" key={props.id} className="p-1" >
                <div className="p-1">
                    {/* image */}
                    <img id="mentor-img" src={props.image} alt="Avatar" />
                </div>
                <div style={{ "fontWeight": "bold" }}>
                    {props.name}
                </div>
                <div style={{ color: "#808080", "fontSize": "13px" }}>
                    <div>{props.company}</div>
                    <div>{props.experience}</div>
                    <div>{props.domain}</div>
                    <div>{props.price}</div>
                </div>
            </div>
            <div className="btn sm p-2" >
                <Button id="btn-practice" style={{ "padding": "3px 10px" }} onClick={props.isAuthed? () => history.push('/bookMock/'+props.id):()=>setPopUp(true)} >Book</Button>
                <Login
                    {...props} 
                    page = {props.page}
                    show={popUp}
                    onHide={()=> setPopUp(false)}
                    setAuth={props.setAuth}
                />
            </div>
        </div>
    )
}

export default Card