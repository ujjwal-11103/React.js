import React, { useState } from 'react'

export default function HandleForm() {

    const [data1, setData1] = useState("")
    const [data2, setData2] = useState("")
    const [data3, setData3] = useState("")

    function getFormData(e) {
        console.warn(data1, data2, data3)
        e.preventDefault();
    }
    return (
        <div>
            <form action="none" onSubmit={getFormData}>
                <input type="text" placeholder='Enter Name' onChange={(e) => setData1(e.target.value)} /> <br /><br />

                <select name="" id="" onChange={(e) => setData2(e.target.value)}>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                </select> <br /><br />

                <input type="checkbox" name="" id="" onChange={(e) => setData3(e.target.checked)} /><span>Accept Terms & Conditions</span> <br /><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
