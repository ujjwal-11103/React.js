import React, { Component } from 'react'

export default class Render_life_cycle_method extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Ujjwal'
        }
    }

    update() {
        this.setState(
            {
                name: 'Prajwal'
            }
        )
    }

    render() {

        console.warn("Rendered", this.props.data);
        return (

            <div>

                {/* props update */}
                <h1>Hello</h1>
                <h2>This text from parent compnent = {this.props.data}</h2>

                {/* state update */}
                <h2>This text from changing state =  {this.state.name}</h2>
                <button onClick={() => this.update()}>Click to change state</button><br /><br />
            </div>

        )
    }
}
