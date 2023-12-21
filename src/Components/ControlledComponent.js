import React, { useState } from 'react'

export default function ControlledComponent() {
    const [data, setData] = useState()
    return (
        <div>
            <h1>Controlled Component</h1>
            <input type="text" value={data} onChange={(event) => setData(event.target.value)} />

            {/* controlled component are those component in which there is a text box and we can manipulate the value of the text box with the help of react 'state' */}
        </div>
    )
}
