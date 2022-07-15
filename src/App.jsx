import './app.css'
import {About, Feature, Cta, Fund} from './components';
import Contact from './components/contact/contact';
import {Footer, Services, Header} from './container'


const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <Services />
      <Feature />
      <Cta />
      <Fund />
      <div>
        <About />
        <Contact />
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
