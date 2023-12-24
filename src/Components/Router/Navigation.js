import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>

            <h1>Navigation</h1>
            <ul>

                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li> <Link to='/User/Ujjwal'>Ujjwal</Link></li>
                <li> <Link to='/User/Prajwal'>Prajwal</Link></li>

                {/* /Users/Prajwal <-- ye ja rha h udhr params ke andr */}
                {/* When clicked on the link it goes to App.js then it searches the desired path then it goes to the user Component */}

            </ul>
        </div>
    )
}
