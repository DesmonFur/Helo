import React, { Component } from "react";
import { connect } from "react-redux";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  };
  
post = () => {
console.log('HTI')
}

  render() {
    return (
      <div>
        <input onChange={e => this.handleChange(e)}  type="text" placeholder="title" name="title" />
        <input onChange={e => this.handleChange(e)} type="text" placeholder="img" name="img" />
        <input onChange={e => this.handleChange(e)} type="text" placeholder="content" name="content" />
        <button onClick={this.post}>Post</button>
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
    const {userId} = reduxState 
    return {userId}
}


export default connect(
    mapStateToProps,
    {})(Form)
    ;
