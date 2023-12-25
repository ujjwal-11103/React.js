import React from 'react'
import { Link } from 'react-router-dom'
export default function Other() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Other page Loaded</h1>
            <Link to='/Contact'>Contact</Link>
        </div>
    )
}
