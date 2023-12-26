import React from 'react'
import { useNavigate } from 'react-router'

export default function Login() {

    const navigate = useNavigate();

    function status() {

        console.log("Renderd");

        let login = localStorage.setItem('login', false)
        console.log(login);
        navigate('/')

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 >Login</h1>
            <input type="text" /><br /><br />
            <input type="text   " /><br /><br />
            <button onClick={() => status()}>Click   </button>
        </div>
    )
}
