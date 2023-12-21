import React, { forwardRef } from 'react'

// {forwardRef}  has to be imported

function ForwardRef(prop, anyref) {
    return (
        <div>

            <input type="text" ref={anyref} />
            {/* anyRef */}
            {/* Passing ref from parent component to child component */}

        </div>
    )
}
export default forwardRef(ForwardRef)

// forwardRef(ForwardRef)   ===> important
