import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {setUser} from '../../ducks/reducer'
export class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    registerUser = () => {
        const {username, password} = this.state
        axios.post('/auth/register', {username, password}).then(
            res => {
                console.log('registerd')
            }
        )
    }

    login = () => {
        const {username, password} = this.state 
        axios.post('/auth/login', {username,password}).then(
            res => {
                console.log(`loggged in user ${this.state.username}`)
            }
        )
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
        console.log(e.target.value)
    }

    render() {
        
        return (
            <div>
                <input onChange={ (e) => this.handleChange(e)} type="text" name='username' placeholder='username'/>
                <input onChange={(e) => this.handleChange(e)} type="password" name='password' placeholder='password'/>
                <Link to='/dashboard'>
                <button onClick={this.login}>Login</button>
                    <button onClick={this.registerUser}>Register</button>
                </Link>
            </div>
        )
    }
}

export default connect(
    null,
    {setUser}
)(Auth)
