import React, { useRef } from 'react'

export default function UncontrolledComponent() {

    const inputRef = useRef()
    function getvalue(e) {
        e.preventDefault();
        console.log("The input boc contain = " + inputRef.current.value);
    }
    return (
        <div>
            <h1>Uncontrolled Component</h1>

            <form onSubmit={(e) => getvalue(e)}>

                <input type="text" ref={inputRef} />
                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}
// the component in which the input box can be updated without the use of react 'state' method then those compoenents are called Uncontrolled Component
