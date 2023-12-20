import React, { useState, useMemo } from 'react'

// Its is a Hook 

// useMemo is use when you want to render only when there is a change in the document and is use in the funcional component only and not in class component

export default function UseMemo() {

    const [data1, setData1] = useState(0)
    const [data2, setData2] = useState(10)


    const usingMEM0 = useMemo(function updatingData2() {   
        console.log("Renderd Data 2");
    }, [data2])
    // when data 2 will get updated then only run
    

    // now it will not render the updatingData2() unless there is a change in data2
    return (
        <div>
            <h1>UseMemo Class</h1>

            <h1>Data 1={data1}</h1>
            <h1>Data 2={data2}</h1>

            {/* <h1> {updatingData2()} </h1> */}

            <h1> {usingMEM0} </h1>

            <button onClick={() => setData1(data1 + 1)}>Update Data1</button>
            <button onClick={() => setData2(data2 * 10)}>Update Data2</button>

        </div>
    )
}
