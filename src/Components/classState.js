import React from 'react';

class NumCounter extends React.Component{
    constructor(){
        super()
        this.state = {
            value : 0
        }
    }
    increase(){
        this.setState({value: this.state.value +1});
        console.log(this.setState);
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Count = {this.state.value}</h1>
                    <button onClick = {()=>this.increase()}>Click to increase count </button>
                </div>
            </div>
        )
    }
}

export default NumCounter;