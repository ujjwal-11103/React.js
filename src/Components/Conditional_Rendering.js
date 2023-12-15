import React, { useState } from 'react'

export default function Conditional_Rendering() {
    let num = prompt("Enter any number (1,2,3) = ");
    console.log(num);
    const [status, setStatus] = useState(num)
    return (
        <div>
            {
                status == 1 ?
                    <h1>Hello 1</h1> :
                    status == 2 ?
                        <h1>Hello 2</h1> :
                        status == 3 ?
                            <h1>Hello 3</h1> :
                            <h1>Not Executed</h1>

            }
        </div>
    )
}
