import React, { PureComponent } from 'react'

export default class PureComponentsProps extends PureComponent {
    render() {
        console.log("Props Class components")
        return (
            <div>
                <h1>Props Class </h1>
                <h1>Count = {this.props.data}</h1>
            </div>
        )
    }
}
