import React, { Component } from 'react'

export class Post extends Component {
    render() {
        const {title, img,content, username,profile} = this.props 
        // console.log(this.props)
        return (
            <div>
                <h3>
                    {title}
                    <img src={img} alt="post"/>
                    {content}
                    <img src={profile} alt="profile"/>
                    {username}
                </h3>
            </div>
        )
    }
}

export default Post
