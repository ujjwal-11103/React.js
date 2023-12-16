import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    // 1st
    constructor() {
        super();
        this.state = {
            name: 'Ujjwal'
        }
        console.log("Constructor Invoked");
    }

    // 3rd
    componentDidMount() {
        console.log("ComponentDidMount Invoked");
    }

    // 2nd
    render() {
        console.log("render invoked");
        return (
            <div>

                <h1>Name = {this.state.name}</h1>

                <button onClick={() => this.setState({
                    name: 'Prajwal'
                })}>Click</button>

            </div>
        )
    }
}
