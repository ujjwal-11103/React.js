import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedComponent(props) {

    const { Component } = props
    const navigate = useNavigate();

    useEffect(() => {

        let login = localStorage.getItem('login')

        console.log(login);

        if (login) {

            console.log('Redirecting to /Login...');
            navigate('/Login');
        }
        else {

            console.log('User is logged in.');

        }
    });


    return (
        <div>
            <Component />
        </div>
    )
}
