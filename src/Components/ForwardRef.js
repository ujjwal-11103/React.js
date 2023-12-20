import React, { forwardRef } from 'react'

// {forwardRef}  has to be imported

function ForwardRef(prop, ref) {
    return (
        <div>

            <input type="text" ref={ref} />

            {/* Passing ref from parent component to child component */}

        </div>
    )
}
export default forwardRef(ForwardRef)

// forwardRef(ForwardRef)   ===> important
