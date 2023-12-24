import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultPage from './Components/Router/DefaultPage'
import Home from './Components/Router/Home'
import Contact from './Components/Router/Contact'
import About from './Components/Router/About'
import Navigation from './Components/Router/Navigation'
import PageNotFound from './Components/Router/PageNotFound'
import User from './Components/Router/User'
export default function App() {
  return (
    <div>

      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path='/' element={<DefaultPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/User/:names' element={<User />} />

          <Route path="/*" element={<PageNotFound />} />


        </Routes>

      </BrowserRouter>

    </div>
  )
}
