import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functional_components/About';
import Gallery from './components/functional_components/Gallery';
import Home from './components/functional_components/Home';
import Contact from './components/functional_components/Contact';
import Navbar from './components/functional_components/Navbar';
import Signup from './components/functional_components/Signup';
import Login from './components/functional_components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      <Route path="/signup"element={<Signup />}></Route>
      <Route path="/login"element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;