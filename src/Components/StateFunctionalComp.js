import { useState } from "react";

import React from 'react'

export default function StateFunctionalComp() {

    const [data, updateData] = useState(0)

    function setData() {
        updateData(data + 1);
    }


    return (
        <div>
            <h1> {data} </h1>
            <button onClick={setData}>Click to Update</button>

        </div>
    )
}
