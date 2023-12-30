import React, { useContext, useEffect } from 'react'
import NotesContext from '../../Context/notes/NotesContext'
export default function Home() {

  const a = useContext(NotesContext)

  useEffect(() => {
    a.update();
    // eslint-disable-next-line 
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>

      <h1>
        This text is from context component Text  = {a.state2.name} <br />
        Age = {a.state2.age}
      </h1>

    </div>
  )
}
