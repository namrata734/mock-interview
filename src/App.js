
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home';
import Signup from './screens/signup';
import InterviewWithMentor from "./screens/interviewWithMentor";
import BookMock from "./screens/bookMock";
import React, {useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";



function App(props) {
	const checkAuthenticated = async () => {
		try {
		  const res = await fetch("https://heypm-backend-demo.herokuapp.com/authentication/verify", {
			method: "POST",
			headers: { jwt_token: localStorage.token }
		  });

		  const parseRes = await res.json();
		  console.log('checking auth')
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
		console.log('entered setauth');
		setIsAuthenticated(boolean);
	};
	let [popUp, setPopUp] = useState(false);
    const history = useHistory();
  return (
  	<BrowserRouter>
	  	<Switch>
	  		<Route
	  			exact={true}
	  			path="/signup"
	  			component={Signup}
	  		/>
	  		<Route
	  			exact={true}
	  			path="/"
	  			render={() => (
					<Home {...props} isAuthed={isAuthenticated} />
				)}
	  		/>
			  <Route
				exact={true}
	  			path="/interviewWithMentor"
				render={() => (
					<InterviewWithMentor  setAuth={setAuth} isAuthed={isAuthenticated} />
				)} 
			  />
			  <Route
				 exact={true}
	  			path="/bookMock/:mentorId"
	  			component={BookMock} 
			  />
			 
	  	</Switch>
  	</BrowserRouter>
  );
}
export default App;
