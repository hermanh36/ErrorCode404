import React from 'react';
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
    this.props.createUser(this.state)
      .then(()=> this.props.history.push('/'));
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
        <input type="submit" value='Sign Up!' />
      </form>
    )
  }
}

export default SignUpForm;