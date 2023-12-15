
import React, { useState } from 'react'

export default function Hide_Unhide_elements() {
    const [data, setData] = React.useState(true);
    return (
        <div>
            {
                data ?
                    <h1>Hello</h1> : null
            }
            <button onClick={() => setData(false)}>Hide</button>
            <button onClick={() => setData(true)}>Show</button>

            <button onClick={() => setData(!data)}>Toggle</button>
        </div>
    )
}
