import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Router/Home'
import Contact from './Components/Router/Contact'
import About from './Components/Router/About'
import Navigation from './Components/Router/Navigation'

export default function App() {
  return (
    <div>

      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path='/Home' Component={Home} />
          <Route path='/About' Component={About} />
          <Route path='/Contact' Component={Contact} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}
