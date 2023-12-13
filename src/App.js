import React from 'react';

function App(){

  let data = 'Ujjwal'

  function apple(){

    data='prajwal'
    console.log(data);
    alert("Function called")
    
  }

  return(
<div>
    <h1>Understanding why to use props and state</h1>
    
    <h2>Hello {data}</h2>

{/* If we have used state method then it would get upfated */}
    <h2>Hello again {data}</h2>                

    {/* This is incorrect */}
    {/* <button onClick={apple()}>Click</button>    */}

    {/* Correct syntax */}
    <button onClick={()=>apple()}>Click</button>   
     
    </div>
  )
}
export default App;