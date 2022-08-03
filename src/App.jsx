
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';


const App = () => {
  return (
	<Routes>
	<Route exact path='/' element={< Home />} />
</Routes>
  )
}

export default App