import React, { Component } from "react";
import axios from 'axios';
class Postdataform extends Component{
    constructor(props){
        super(props)
        this.state ={
            postId :'',
            name : '',
            email :'',
            address : ''
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state);
        
        axios.post('https://jsonplaceholder.typicode.com/comments', this.state)

        .then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        })
    }

    render(){
        const{postId,name,email,address} = this.state

        return(
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" placeholder="Enter your Post Id" name="postId" value={postId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your name" name="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your email" name="email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your address" name="address" value={address} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postdataform;