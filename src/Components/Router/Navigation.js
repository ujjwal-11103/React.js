import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>

            {/* <h1>Navigation</h1> */}
            <br /><br />
            <ul className='links'><br /><br />

                <li><NavLink className="Li-items" to='/Home'>Home</NavLink></li>
                <li><NavLink className="Li-items" to='/About'>About</NavLink></li>
                <li><NavLink className="Li-items" to='/Contact'>Contact</NavLink></li>


                <li><NavLink className="Li-items" to='/UseParams'>Params</NavLink></li>
                <li><NavLink className="Li-items" to='/UseNavigate'>useNavigate</NavLink></li>



                <li><NavLink className="Li-items" to='/User/Ujjwal'>Ujjwal</NavLink></li>
                <li><NavLink className="Li-items" to='/User/Prajwal'>Prajwal</NavLink></li>

                {/* /Users/Prajwal <-- ye ja rha h udhr params ke andr */}
                {/* When clicked on the NavLink it goes to App.js then it searches the desired path then it goes to the user Component */}

                {/* useLocation */}
                <li><NavLink className="Li-items" to='/UseLocation' state={{ name: 'Ujjwal' }}>UseLocation</NavLink></li>
                {/* When you want to send some information while routing from one component to another we use state  */}

                {/* Login */}
                <li><NavLink className="Li-items" to='/Login'>Login</NavLink></li>

            </ul>
        </div>
    )
}
