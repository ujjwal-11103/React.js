import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function UseNavigate() {
    const navigate = useNavigate();
    const NavToPage = () => {


        // let x = true
        let x = false

        // Conditional Navigation (routing)
        if (x == true) {
            navigate('/Home')
        }
        else
            navigate('/About')
    }


    // Another Method
    const navigateMathod = useNavigate();
    const NavToPageMethod = (url) => {
        navigateMathod(url)
    }
    return (
        <div>
            <button onClick={() => NavToPage()}>Click to navigate to Home page</button>
            <button onClick={() => NavToPage()}>Click to navigate to ABout page</button><br /><br />

            {/* Another method (*)) */}
            <button onClick={() => NavToPageMethod('/Home')}>Click to navigate to Home page</button>
            <button onClick={() => NavToPageMethod('/About')}>Click to navigate to ABout page</button>
        </div>
    )
}
