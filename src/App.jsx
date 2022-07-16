import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import PageNotFound from './pages/page-not-found'
import {Signup, Login, ForgottenPassword} from './pages/auth-pages'

import './app.css';

class App extends Component {
render() {
	return (
		<div className="App">
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
				<Route exact path='/signup' element={< Signup />}></Route>
				<Route exact path='/signin' element={< Login />}></Route>
				<Route exact path='/reset' element={< ForgottenPassword />}></Route>
				<Route exact path='*' element={< PageNotFound />}></Route>

		</Routes>
		</div>
);
}
}

export default App
