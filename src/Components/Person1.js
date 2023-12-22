import React from 'react'
import updatedComponent from './HOC'

function Person1({ money, handleIncrease }) {
    return (
        <div>
            <h1>Person 1 contributed = {money}</h1>
            <button onClick={handleIncrease}> Click</button>
        </div>
    )
}
export default updatedComponent(Person1)


// In these components (Person1 and Person2), you have functional components that receive money and handleIncrease as props. These components display a title showing the amount of money and a button. When the button is clicked, the handleIncrease function is called.

