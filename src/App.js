import React, { PureComponent } from 'react'
// import PureComponentsProps from './Components/PureComponentsProps';
export default class App extends PureComponent {
  constructor() {
    super(); {
      this.state = {
        count: 1
      }
    }
  }
  render() {
    console.log("Re-renderd");
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Click</button>

        {/* <PureComponentsProps data={this.state.count} /> */}


        {/* Since count here it is one (1) only so since the pagee is not updated  then also it will re render the page*/}
        {/* therefore to prevent this we use pure component it only updates the page when there is any change in the document(page) */}

      </div>
    )
  }
}
