import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/landings pages/home';
import Contact from './pages/landings pages/contact';
import {Signup, Signin} from './pages/auth-pages'
import './app.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
				<Route exact path='/signup' element={< Signup />}></Route>
				<Route exact path='/signin' element={< Signin />}></Route>

		</Routes>
		</div>
	</Router>
);
}
}

export default App;
