// import logo from './logo.svg';
// import './App.css';
// import ChildComponent from './Components/Props.js'

// fuction ParentComponent(){
//   const
// }


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* simple passing argument from parent component to child component */}
//       <ChildComponent name='Ujjwal' age={20} />

//       {/* Passing objects to child components */}
//       <ChildComponent person={{ surname: 'Upadhyay' }} age='21' />


//       {/* const person={
//         surname = "Upadhyay",
//         age = 21,
//         address = '123 society',
//     }
//     <ChildComponent person ={person}/> */}

//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import ChildComponent from './Components/Props.js'

function App() {
  const person = {
    name: 'John',
    age: 25,
    address: '123 Main Street',
  };

  return (
    <div>
      <h1>My React App</h1>
      <ChildComponent person={person} />
    </div>
  );
}

// export default App;
export default App

