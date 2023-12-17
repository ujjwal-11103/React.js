import React, { useEffect, useState } from 'react'
import Hooks_useEffect from './Components/Hooks_useEffect'

export default function App() {

  const [data1, setData1] = useState(0)
  const [data2, setData2] = useState(0)

  // useEffect(() => {
  //   console.log("Count 2 only invoked");
  // }, [data2])


  return (
    <div>
      {/* <h2>Count 1= {data1}</h2>
      <h2>Count 2 = {data2}</h2> */}

      <Hooks_useEffect Count_1={data1} Count_2={data2} />
      <button onClick={() => setData1(data1 + 1)}>Count 1</button>
      <button onClick={() => setData2(data2 + 1)}>Count 2</button>
    </div>
  )
}
