import React, { Component } from 'react';

class Login extends Component {
  state = {
    login: {
      username: '',
      password: ''
    }
  };

  onFormChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const login = { ...this.state.login };
    //key of state with the same name as the name of input field is set to the value of the input field
    login[attributeName] = attributeValue;

    this.setState({ login });
    console.log(this.state.login);
  };

  onLoginClick = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="login ui container">
        <form className="ui form" onChange={this.onFormChange}>
          <div className="field">
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} />
            <label>Password:</label>
            <input type="text" name="password" value={this.state.password} />
          </div>

          <button className="ui button big" onClick={this.onLoginClick}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
