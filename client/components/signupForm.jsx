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

  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
  }

  handleSubmit(e) {
  e.preventDefault();
  request.post('/api/signupForm')
         .send(this.state)
         .then((user) => {
           this.updateAuth();
           let cleanUser = JSON.parse(user.text);
           this.props.router.push('/signupForm');
         });
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
