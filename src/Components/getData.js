import React from 'react'
import axios from 'axios'

class GetData extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({posts : response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        const{posts}= this.state

        return(
            <div>
            <h1>List of Data</h1>
            {
            posts.map(post=> <div key={post.userId}><h4>User ID: {post.userId}</h4>
            <h4>Title : </h4><h5>{post.title}</h5>
            <h4>Data : </h4><p>{post.body}</p>
            </div>)
            
            }

            
            </div>
        )
    }
}

export default GetData ;