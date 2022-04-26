import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.login(this.state)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Login</h1>
        <label>Username/Email
          <input type="text" value={this.state.username} onChange={this.update('username')} />
        </label>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </label>
        <input type="submit" value="Log In"/>
      </form>
    )
  }
}

export default LoginForm;