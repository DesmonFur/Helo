import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
export class Nav extends Component {

    render() {
        console.log(this.props)
        return (
            <div >
            <h3>navigation menu</h3>
                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>
                <Link to='/new'>
                    <button>New Post</button>
                </Link>
            <span>
                {this.props.username}
                <img src={this.props.profileImg} alt=" profile"/>
            </span>

                <Link to='/'>
                    <button>Logout</button>
                </Link>
            </div>
        )
    }

}
        function mapStateToProps(reduxState) {
            const {username, profileImg} = reduxState 
            return {username, profileImg}
        }

export default connect(
    mapStateToProps,
    {})(Nav)
