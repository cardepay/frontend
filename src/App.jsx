
import {Routes, Route} from 'react-router-dom';
// import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';


import Home from './pages/landings pages/home';
import Contact from './pages/landings pages/contact';
import './app.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
			<Route exact path='/contact' element={< Contact />}></Route>
		
      </Routes>
  );
  }

export default App;
