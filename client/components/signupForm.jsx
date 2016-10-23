import React, { Component } from 'react';
import request from 'superagent';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }

  render() {
    return (
      <div id="loginBody">
        <h1 className="text">Welcome to the Mailing List</h1>
          <p className="text">Enter your name & email to join</p>
          <div id="login-form">
            <input className="input" name="text" onChange={this.handleChange} type="text" placeholder="Your Name" />
          </div>
          <div>
            <input className="input" name="text" onChange={this.handleChange} type="text" placeholder="Your Email" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  };
}


export default Signup;
