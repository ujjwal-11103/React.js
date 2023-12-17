import React, { useEffect } from 'react'

export default function Hooks_useEffect(props) {
    useEffect(() => {
        console.log("Count_1 invoked");
    }, [props.Count_1])
    return (
        <div>
            <h2>Count 1= {props.Count_1}</h2>
            <h2>Count 2= {props.Count_2}</h2>

        </div>
    )
}
