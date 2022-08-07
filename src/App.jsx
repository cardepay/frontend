
import { Routes,Route } from 'react-router-dom';


import Home from './pages/home';
import SignUp from './pages/signUp';
import Login from './pages/login';
import ForgottenPassword from './pages/forgotten-password';
import PageNotFound from './pages/page-not-found';


const App = () => {
  return (
	<Routes>
	<Route exact path='/' element={< Home />} />
	<Route  path='/signup' element={< SignUp />} />
	<Route  path='/login' element={< Login />} />
	<Route  path='/forgotten-password' element={< ForgottenPassword />} />




	<Route path='*' element={< PageNotFound />} />
</Routes>
  )
}

export default App