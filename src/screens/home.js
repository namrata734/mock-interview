import Button  from 'react-bootstrap/Button';
import React,{useState, useEffect } from 'react'
import NavbarBeforeSignUp from '../components/navbarBeforeSignUp'
import NavbarBrand from '../components/navbarBrand'
import Testimonials from '../components/testimonials';
import { useHistory } from "react-router-dom";
import NavbarAfterSignUp from '../components/navbarAfterSignUp';
import image from '../assets/home.png'

const Home = (props) => {
    console.log('entered home');
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
    console.log('till here');
	const setAuth = boolean => {
		setIsAuthenticated(boolean);
	};
   
    return (
        <div className="p-4" id="home">
            {isAuthenticated? <NavbarBrand setAuth = {setAuth}/> : <NavbarBeforeSignUp page='/'/> }
             {/* build actual products */}
            <div className= "row container-fluid">
            {/* left side */}
                <div className = "col-6">
                    <div className= "heading-starting">
                     Build actual products that you can showcase to the world
                    </div>
                    <div className="text-block">
                    Product Management is a hands-on role! We believe the best way to learn & showcase your intent for a PM role is by building actual products & living through the challenges of a real-life PM. 
                    Theoretical readings/courses will only take you halfway through the learning curve. 
                    So, we built <strong>heyPM</strong> to bridge that gap & address the other half, to help you cross the finish line.
                    </div>
                    <div className= "row">
                        <div className="col-3 ml-5 p-3">
                            <Button id="btn-practice" className="btn"  onClick={()=>history.push('/interviewWithMentor')}>Practice Ground</Button>
                        </div>
                        <div className="col-3 ml-5 p-3">
                            <Button id="btn-practice" className="btn" href='https://heypm-interview-experience.webflow.io/'>Interview Substack</Button>
                        </div>
                    </div>

                </div>
                {/* image */}
                <div className = "col-6">
                <img 
                    id="img-job-interview"
                    src={image}
                    alt="job interview image"
                    />
                </div>

            </div>
            {/* testimonals */}
            <Testimonials/>
            {/* links */}
            <div className="row pl-3">
                <div className="col-4">
                <a  href="https://docs.google.com/forms/d/e/1FAIpQLScHw7xfAeZ3kiCocbeIU4vhMHrbPCWFp5lDiEegFOxCpg0USQ/viewform">Become a Mentor</a>
                </div>
                <div className="col-4">
                    <a href="https://heypm-interview-experience.webflow.io/share-your-interview">Submit Your Interview Experience</a>
                </div>
                <div className="col-4">
                    <a href="">More Testimonals..</a>
                </div>
            </div>
        </div>
    )
}

export default Home
