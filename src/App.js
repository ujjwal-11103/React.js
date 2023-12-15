import React, { useState } from 'react';
import Passing_function from './Components/Passing_function';
function App() {
  function getData(){
    alert("This text from parent component")
  }
  return (
    <div>
      <Passing_function data ={getData}/>
    </div>
  )
}
export default App;   