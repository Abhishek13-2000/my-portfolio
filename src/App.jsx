
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experince from './components/Experince'
import Hero from './components/Hero'
import NavBar from "./components/NavBar"
import Portfolio from './components/Portfolio'
import Sociallinks from './components/Sociallinks'
function App() {
  return (
    <>
     <NavBar/> 
     <Hero/>
      <About/>
     <Portfolio/>
     <Experince/>
     <Contact/>
     <Sociallinks/>
    </>
  )
}

export default App
