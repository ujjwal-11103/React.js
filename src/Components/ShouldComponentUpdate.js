import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("Constructor Invoked");
    }

    shouldComponentUpdate(nextProps, nextState) {

        //this.state.count   = ye old value store krta hai shouldComponentUpdat me
        //nextstate.count   = ye new value store krta hai shouldComponentUpdat me jo ki update honewala hai

        console.log("Current Count:", this.state.count);
        console.log("Next Count:", nextState.count);

        if (nextState.count > 3 && nextState.count < 9) {
            return true;
        }
    }
    render() {
        console.log("rendered invoked");
        return (
            <div>

                <h2>Count = {this.state.count}</h2>

                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>count+1</button>
            </div>

        )
    }
}
