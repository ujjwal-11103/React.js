
import React, { useRef } from 'react'

export default function UseRef() {

    const inputRef = useRef(null);
    // This is how ref is used in functional component

    function getVal() {
        console.log(inputRef.current.value);
        inputRef.current.value = '12345678'
        inputRef.current.focus();
    }

    return (

        <div>
            <h1>Implementing useRef</h1>
            <input type="text" ref={inputRef} />
            <button onClick={() => getVal()}>Click</button>
        </div>

    )
}
