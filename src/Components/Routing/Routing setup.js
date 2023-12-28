import React from 'react'
import { BrowserRouter as Router, Router, Route, Routes, Link } from 'react-router-dom'
export default function Routing_setup() {
    return (
        <div>

            <Router>
                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>


                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                </Routes>

            </Router>

        </div >
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