import React from 'react'
import updatedComponent from './HOC'

function Person2({ money, handleIncrease }) {
    return (
        <div>
            <h1>Person 2 contributed = {money}</h1>
            <button onClick={handleIncrease}> Click</button>
        </div>
    )
}
export default updatedComponent(Person2)
