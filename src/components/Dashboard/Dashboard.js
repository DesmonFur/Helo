import React, { Component } from 'react'
import Post from '../Post/Post'
import axios from 'axios';
import {connect} from 'react-redux'
export class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
}
}

receivePosts = () => {
    const {userId} = this.props
    // console.log(this.props)
    axios.get(`/api/posts/${userId}`).then(res => {
        this.setState({
            posts: res.data
        })
    })
}

    render() {
        const {posts} = this.state
        console.log(this.props)
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder='search' name='search'/>
                <button onClick={this.receivePosts}>Search</button>
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

function mapStateToProps(reduxState) {
    const {userId} = reduxState 
    return {userId}
}

export default connect(mapStateToProps)(Dashboard)
