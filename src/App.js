import React from 'react'
import Reuse_components from './Components/Reuse_components'
export default function App() {
  const object = [
    {
      name: 'Ujjwal', email: 'ujjwal@gmail.com'
    },
    {
      name: 'Prajwal', email: 'prajwal@gmail.com'
    },
    {
      name: 'Raj', email: 'raj@gmail.com'
    }
  ]
  return (
    <div>
      <h1>Reusing components in loop</h1>
      {
        object.map((item, i) =>
          <Reuse_components data={item} />
        )}
    </div >
  )
}
