import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Contact() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Contact</h1>



            {/* Nested Routing Concept */}

            <Link to='/JoinUs'>Join US</Link><br />
            <Link to='/Other'>Other</Link>

            <Outlet />
        </div>
    )
}
