import React from "react";

class Counter extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment(){
        this.setState ({count : this.state.count + 1})
        console.log(this.state.count)
    }
    render(){
        return(
        <div>
            <h1>Counter {this.state.count}</h1><br/>
            <button onClick={()=>this.increment()}>Click to increment</button>
        </div>
        )
    }
}

export default Counter;