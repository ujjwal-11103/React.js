import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>

            <h1>Navigation</h1>

            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>

        </div>
    )
}
