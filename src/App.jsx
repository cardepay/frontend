
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Contact from './pages/contact';   
import ForgottenPassword from './pages/forgotten-password';   
import PageNotFound from './pages/page-not-found';   

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
			<Route path='/contact' element={< Contact />} />
			<Route path='/forgotten-password' element={< ForgottenPassword />} />
			
      
      <Route path='*' element={< PageNotFound />} />
		
      </Routes>
  );
  }

export default App;
