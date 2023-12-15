import React from 'react'

export default function Passing_function(props) {
  return (
    <div>
        <h1>User Component</h1>
        <button onClick={props.data}>Click to fetch function from parent component</button>
    </div>
  )
}
