import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UseLocation() {
    const location = useLocation();
    console.log(location);
    return (

        <div style={{ textAlign: 'center' }}>
            <h1>
                Implementing uselocation
            </h1>
        </div>
    )
}
