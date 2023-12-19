import React, { Fragment } from 'react'
import Fragments from './Components/Fragments'
// fragmens are use to wrap multiple elements or components 
export default function App() {

  return (
    // <React.Fragment>
    // for below method it require import of {fragment}
    <Fragment>
      {/* <> */}
      <h1>hello </h1>
      <Fragments />
      {/* </> */}
    </Fragment>
    // </React.Fragment>
  )

}
