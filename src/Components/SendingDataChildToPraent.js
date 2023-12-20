import React from 'react'

export default function SendingDataChildToPraent(props) {
    const object = [
        { name: "ujjwal", Age: '20' }
    ]
    return (
        <div>
            <h1>Child component</h1>
            <button onClick={() => props.data(object)}>Click</button>
        </div>
    )
}
