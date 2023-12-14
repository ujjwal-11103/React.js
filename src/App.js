import React,{useState} from 'react';
import PropsFunctionalComp from './Components/PropsFunctionalComp';
function App() {

  // const[data,updateData]=useState('Ujjwal')

  // function setData(){
  //   updateData('Prajwal')
  // }
  return (
    <div> 

      <PropsFunctionalComp name='Ujjwal' age='20' other={{Add:'Mumbai', Mob:"123"}}/>

      {/* now if we had to update the props */}

      {/* <PropsFunctionalComp name={data} age='20' other={{Add:'Mumbai', Mob:"123"}}/> */}
      {/* <button onClick={setData}>Click to update</button> */}
    </div>
  )
}
export default App;   