import React, { Component, createRef } from 'react'

export default class RefClassComp extends Component {
    constructor() {
        super();

        this.inputRef = createRef();

        // to manipulate the DOM forcefully ref are used 
        // inputRef  here you can used any name and createRef has to be used to make it ref

    }
    getVal() {

        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color = 'red'
        this.inputRef.current.style.backgroundColor = 'blue'

    }

    render() {
        return (
            <div>
                
                <h1>Using ref</h1>

                <input type="text" ref={this.inputRef} />
                {/* where there will be inputRef the element will act as ref */}

                <button onClick={() => this.getVal()}>Click</button>
                
            </div>
        )
    }
}
