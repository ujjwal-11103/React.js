import React, { useRef } from 'react'
import ForwardRef from './Components/ForwardRef';
export default function App() {

  const inputref = useRef();

  function getVal() {
    console.log(inputref.current.value)
    inputref.current.value = '123456789'
  }

  return (
    <div>

      <h1>forwardRef</h1>

      <ForwardRef ref={inputref} />

      <button onClick={() => getVal()}>Click</button>

    </div>
  )
}
