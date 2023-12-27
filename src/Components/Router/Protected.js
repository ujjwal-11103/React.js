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


// 1. React.js mein local storage ka istemal karke aap client-side par data store aur retrieve kar sakte hain.

// 2.Local storage ek saral key-value store pradan karta hai jo is bat ka dhyan rakhta hai ki jab browser band hota hai aur phir se khulta hai, tab bhi data bana rahta hai.

// 3.Aap local storage ka istemal karke chhote matra mein data, jaise ki upayogakarta ke pasandeeda ya prasanskriti sthiti, ko store karne ke liye kar sakte hain.


