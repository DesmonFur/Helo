import React, { Component } from "react";
import axios from "axios";
// import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  registerUser = () => {
    const { username, password } = this.state;
    axios.post("/auth/register", { username, password }).then(res => {
      this.setState({
        username: res.data[0],
        profileImg: res.data[0]
      });
    //   console.log(res.data);
      this.props.setUser(res.data[0].username, res.data[0].profile_pic, res.data[0].id);
      this.props.history.push("/dashboard");
    //   console.log(this.props);
    //   console.log(this.state);
    })
  };

  login = () => {
    const { username, password } = this.state;
    axios.post("/auth/login", { username, password }).then(res => {
      this.setState({
        username: res.data[0],
        profileImg: res.data[0]
      });
    //   console.log(res.data);
      this.props.setUser(res.data[0].username, res.data[0].profile_pic, res.data[0].id);
      this.props.history.push("/dashboard");
    //   console.log(this.props);
    //   console.log(this.state);
    })
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          onChange={e => this.handleChange(e)}
          type="password"
          name="password"
          placeholder="password"
        />
        {/* <Link to='/dashboard'> */}
        <button onClick={this.login}>Login</button>
        <button onClick={this.registerUser}>Register</button>
        {/* </Link> */}
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Auth);
