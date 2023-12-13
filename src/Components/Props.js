// import React from 'react'
// function ChildComponent(props) {
//     return (
//         <div>
//             {/* Simple argument passed */}
//             <p>Name = {props.name}</p>
//             <p>Age = {props.age}</p>

//             {/* object properties accessed */}
//             <p>Surname={props.person.surname}</p>
//             <p>Age={props.age}</p>

//         </div>
//     );
// }

// export default ChildComponent;
// ChildComponent.js

 

import React from 'react';

function ChildComponent(props) {
    // destructuring assignment 
    const { person } = props;

    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Address: {person.address}</p>
        </div>
    );
}

export default ChildComponent;
