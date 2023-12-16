import React, { Component } from 'react'
import ComponentWillMount from './Components/ComponentWillMount';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true
    }
  }
  render() {
    return (
      <div>
        {
          this.state.status ?
            <ComponentWillMount /> :
            <h1>Component Unmounted</h1>
        }

        <button onClick={() => this.setState({
          status: !this.state.status
        })}> Toggle</button>
      </div>
    )
  }
}
