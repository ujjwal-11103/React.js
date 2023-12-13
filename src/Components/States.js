import React from 'react'
export default class States extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Ujjwal',
            age:'20',
            count:0
        }
    }

    updatingState(){

        this.setState({
            name:'Prajwal',
            age:'24',
            count: this.state.count + 1

        })
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Age = {this.state.age}</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{
                    this.updatingState();
                }}>Click</button>
            </div>
        )
    }
}