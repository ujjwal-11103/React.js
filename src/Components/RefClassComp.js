import React, { Component, createRef } from 'react'

export default class RefClassComp extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
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
                <button onClick={() => this.getVal()}>Click</button>
            </div>
        )
    }
}
