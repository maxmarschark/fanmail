import React, { Component } from 'react';
import request from 'superagent';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }

  handleSubmit(e) {
    e.preventDefault();
    request.post('/api/signup')
           .send(this.state)
           .then((user) => {
             console.log('success');
             const cleanUser = JSON.parse(user.text);
             this.props.router.push('/signupForm');
           });
  }

  render() {
    return (
      <div id="loginBody">
        <h1 className="text">Welcome to the Mailing List</h1>
          <p className="text">Enter your name & email to join</p>
          <div id="login-form">
            <input className="input" name="name" onChange={this.handleChange} type="text" placeholder="Your Name" />
          </div>
          <div>
            <input className="input" name="email" onChange={this.handleChange} type="text" placeholder="Your Email" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  };
}


export default Signup;
