import React from 'react'
// external css
import './Components/style.css'

// external custom css
import style from './Components/style.module.css'

export default function App() {
  return (
    <div>
      <h1 className='primary'>This is blue in color and is called external css </h1>
      <h1 style={{ color: 'red' }}>This is in red color and is called inline css</h1>
      <h1 className={style.module}>This is green in color and is known as custom css</h1>
    </div>
  )
}
