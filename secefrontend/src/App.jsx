import { useState } from 'react'
import './App.css'
import Home from './components/functional_components/Home';
import Contact from './components/functional_components/Contact';
import Gallery from './components/functional_components/Gallery';
import About from './components/functional_components/About';
import Navbar from './components/functional_components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="Secelogo" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
