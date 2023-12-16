import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Ujjwal',
            count: 0
        }
        console.log("Constructor Invoked");
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.log("componentDidUpdate invoked", preState);
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1
            })
        }
        else {

            alert("Exited")
        }

        //infinite loop if not given any ending condition

        // componentDidUpdate(preProps, preState, snapshot) {
        //     console.log("componentDidUpdate invoked", preState);
        //     this.setState({
        //         count: this.state.count + 1
        //     })
    }

    render() {

        console.log("render invoked");

        return (
            <div>

                <h2>Name = {this.state.name}</h2>
                <h2>Count = {this.state.count}</h2>

                <button onClick={() => this.setState({
                    name: 'Prajwal'
                })}>update</button>

                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>count+1</button>

            </div>
        )
    }
}
