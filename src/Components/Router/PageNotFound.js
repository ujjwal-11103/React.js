import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
    return (
        <div>

            <h1 style={{ textAlign: 'center' }}> 404</h1>
            <h1 style={{ textAlign: 'center' }}>Page not found</h1>
            <Link to='/Home'>Home</Link>

        </div>
    )
}
