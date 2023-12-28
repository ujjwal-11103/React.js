import React from 'react'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'
export default function Routing_setup() {
    return (
        <div>
            <h1>Helo</h1>
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <BrowserRouter>

                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                </Routes>


            </BrowserRouter>
        </div>
    )
}


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h1>This is Home Page</h1>
        </div>
    )
}


function About() {
    return (
        <div>
            <h1>About</h1>
            <h1>This is About Page</h1>
        </div>
    )
}