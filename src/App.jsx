
import { Routes,Route } from 'react-router-dom';


import Home from './pages/home';
import SignUp from './pages/signUp';
import Login from './pages/login';
import PageNotFound from './pages/page-not-found';


const App = () => {
  return (
	<Routes>
	<Route exact path='/' element={< Home />} />
	<Route exact path='/signup' element={< SignUp />} />
	<Route exact path='/login' element={< Login />} />




	<Route exact path='*' element={< PageNotFound />} />
</Routes>
  )
}

export default App