import React, { Component } from 'react'

export class Post extends Component {
    render() {
        const {title, img,content, username,profile} = this.props 
        // console.log(this.props)
        return (
            <div>
                <h4>
                     {title}  
                <br />
                    {username}
                    <img src={profile} alt="profile"/>
                </h4>
                    {/* <img src={img} alt="post"/> */}
                    {/* {content} */}
                
            </div>
        )
    }
}

export default Post
