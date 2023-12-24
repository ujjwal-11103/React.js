import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Router/Home'
import Contact from './Components/Router/Contact'
import About from './Components/Router/About'
import Navigation from './Components/Router/Navigation'
import PageNotFound from './Components/Router/PageNotFound'

export default function App() {
  return (
    <div>

      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />

          <Route path="/*" element={<PageNotFound />} />

          {/* Jab aap react-router-dom se Routes component ka istemal karte hain, to wo uss Route ko render karta hai jo current location se match hota hai. Aapke case mein, jis Route ka path="/*" hai, wo kisi bhi path ke sath match hota hai, isliye hamesha PageNotFound component ko render karega. */}

          {/* Seedhi baat / iske aage koi matching nhi hai routing ke liye isliye jab kuch nhi mila toh /* render hogya */}

          {/* Age usse bachna hai toh */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* Iska istemal ke skte ho jo ki by default Home ko render krega */}


        </Routes>

      </BrowserRouter>

    </div>
  )
}
