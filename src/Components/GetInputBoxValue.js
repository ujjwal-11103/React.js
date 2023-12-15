
import React, { useState } from 'react'

export default function GetInputBoxValue() {

  const [data, setData] = useState("")
  const [data2, getData] = useState(false)

  function updateData(val) {
    setData(val.target.value)
    getData(false)
  }

  return (
    <div>
      {
        data2 ?
          <h1>{data}</h1>
          : null
      }
      <input type="text" onChange={updateData} />

      {/* if wanyt to update content on button click */}
      <button onClick={() => getData(true)}>Click to update</button>
    </div>
  )
}
