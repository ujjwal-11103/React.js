import React, { useState } from 'react'

function updatedComponent(OriginalComponent) {
    function NewComponent() {

        const [money, setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money * 2);
        };
        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }

    return NewComponent;
}

export default updatedComponent;

// This is a Higher-Order Component (HOC) named updatedComponent. It takes an original component (OriginalComponent) as an argument and returns a new component (NewComponent). The NewComponent is a functional component that contains local state (money) and a function (handleIncrease) to update that state.

// When the NewComponent is rendered, it renders the OriginalComponent with additional props (handleIncrease and money). The handleIncrease function doubles the current money when called