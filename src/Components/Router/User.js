import React from 'react'
import { useParams } from 'react-router'
export default function () {
    const data = useParams();
    const { names } = data;
    console.log(names);
    return (
        <div>
            <h1>This is {names} Page</h1>
        </div>
    )
}
