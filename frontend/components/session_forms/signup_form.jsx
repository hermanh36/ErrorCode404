import React from 'react';
import { withRouter } from 'react-router-dom';
class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  update(field){
    return e => {
      this.setState( { [field]: e.target.value })
    }
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.createUser(this.state).then(() => this.props.history.push('/'));
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error+${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Sign Up</h1>
        <label>Username
          <input type="text" value={this.state.username} onChange={this.update('username')} />
        </label>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        {this.renderErrors()}
        <input type="submit" value='Sign Up!' />
      </form>
    )
  }
}

export default withRouter(SignUpForm);