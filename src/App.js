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
import UseParams from './Components/Router/UseParams'
import UseNavigate from './Components/Router/UseNavigate'
import JoinUS from './Components/Router/JoinUS'
import Other from './Components/Router/Other'
import UseLocation from './Components/Router/UseLocation'
import Login from './Components/Router/Login'
import ProtectedComponent from './Components/Router/Protected'
export default function App() {
  return (
    <div>

      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path='/' element={<DefaultPage />} />

          <Route path='/Home' element={<ProtectedComponent Component={Home} />} />
          <Route path='/About' element={<ProtectedComponent Component={About} />} />

          {/* Added Nested Routing Concept */}
          <Route path='/Contact/' element={<Contact />} />
          <Route path='/JoinUs' element={<JoinUS />} />
          <Route path='/Other' element={<Other />} />



          <Route path='/User/:names' element={<User />} />

          <Route path='/UseParams' element={< UseParams />} />
          <Route path='/UseNavigate' element={< UseNavigate />} />


          <Route path='/UseLocation' element={<UseLocation />} />

          <Route path='/Login' element={<Login />} />

          <Route path="/*" element={<PageNotFound />} />


        </Routes>

      </BrowserRouter>

    </div>
  )
}
