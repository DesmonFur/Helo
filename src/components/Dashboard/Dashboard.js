import React, { Component } from 'react'
import Post from '../Post/Post'
import axios from 'axios';
export class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
            

    }
}

componentDidMount(){
    axios.get(`/posts/:userid`).then(res => {
        this.setState({
            posts: res.data
        })
    })
}

    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder='search' name='search'/>
                <button>Search</button>
                <button>Reset</button>
                <input type="checkbox" name='userposts' /> My posts
                {posts.map(post => (
                        <Post 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        img={post.img}
                        content={post.content}
                        author_id={post.author_id}
                        profile={post.profile_pic}
                        username={post.username}
                        />
                ))}
            </div>
        )
    }
}

export default Dashboard
