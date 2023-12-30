import React from 'react'
import NoteState from './Context/notes/NoteSate'
import Home from './Components/Router/Home'
export default function App() {
  return (
    <div>
      <NoteState>

        <Home />

      </NoteState>

      {/*</NoteState> isse wrap krne ka mtlb ki srae components or uske bhi andr ke components ko access mil jaye NoteState ka */}
    </div>
  )
}
