import React, { Component } from 'react'

export default class ComponentWillMount extends Component {
    componentWillUnmount() {

        console.log("Comonent Unmounted");

    }

    render() {

        return (
            <div>

            </div>
        )

    }
}
