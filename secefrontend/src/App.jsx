import { useState } from 'react'

import './App.css'
import Home from './components/functional_components/Home';
import Contact from './components/functional_components/Contact';
import Gallery from './components/functional_components/Gallery';
import About from './components/functional_components/About';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Home/>
      <About/>
      <h3>Without Props</h3>
      <Gallery/>
      <h3>With Props</h3>
      <Gallery  image="Secelogo" page="Gallery"/> 
      <Contact/> 
    
       </div>
    
    </>
  )
}

export default App
