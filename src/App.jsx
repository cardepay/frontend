
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import PageNotFound from './pages/page-not-found';


const App = () => {
  return (
	<Routes>
	<Route exact path='/' element={< Home />} />



  
	<Route exact path='*' element={< PageNotFound />} />
</Routes>
  )
}

export default App