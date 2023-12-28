import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Links from './Components/Routing/Links'
import About from './Components/Routing/About'
import Home from './Components/Routing/Home'
export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>

      <Links />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>



    </div>
  )
}


