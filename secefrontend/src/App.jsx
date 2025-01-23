import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functional_components/About';
import Gallery from './components/functional_components/Gallery';
import Home from './components/functional_components/Home';
import Contact from './components/functional_components/Contact';
import Navbar from './components/functional_components/Navbar';
import Signup from './components/functional_components/Signup';
import Login from './components/functional_components/Login';
import UseState from './components/functional_components/Hooks/UseState';
import UseEffect from './components/functional_components/Hooks/UseEffect';
import UseEffectAPI from './components/functional_components/Hooks/UseEffectAPI';
import UseEffectAPIimage from './components/functional_components/Hooks/UseEffectAPIimage';
import UseReducer from './components/functional_components/Hooks/UseReducer';
import UseRef from './components/functional_components/Hooks/UseRef';
import UseMemo from './components/functional_components/Hooks/UseMemo';
import Usecallback from './components/functional_components/Hooks/Usecallback';

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
      <Route path="/useState"element={<UseState/>}></Route>
      <Route path="/useEffect"element={<UseEffect/>}></Route>
      <Route path="/signup"element={<Signup />}></Route>
      <Route path="/login"element={<Login />}></Route>
      <Route path='/UseEffectAPI'element={<UseEffectAPI/>}></Route>
      <Route path='/UseEffectAPIimage' element={<UseEffectAPIimage/>}></Route>
      <Route path='/UseReducer'element={<UseReducer/>}></Route>
      <Route path='/Useref' element={<UseRef/>}></Route>
      <Route path='/UseMemo' element={<UseMemo/>}></Route>
      <Route path='/Usecallback' element={<Usecallback/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;