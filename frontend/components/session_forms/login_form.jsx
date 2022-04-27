import React from 'react';
import icon from '../../images/icon.png';
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
      .then(() => this.props.history.push('/'));
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
      <form className='login-form' onSubmit={this.submitHandler}>
        <div className='login-form-container'>
          <div className='login-header-container'>
            <img src={icon} />
            <h1 className='login-header'>Login</h1>
          </div>
          <div className='login-house'>
            <div className='login-label-container'>
              <label for='user'className='user-label'>Username
              </label>
              <input className='user-field' name='user' type="text" value={this.state.username} onChange={this.update('username')} />
              <label for='password'className='password-label'>Password
              </label>
              <input className='password-field' name='password'type="password" value={this.state.password} onChange={this.update('password')} />
              <div className='login-errors'>{this.renderErrors()}</div>
            </div>
            <input className='form-login-btn' type="submit" value="Log In"/>
          </div>
        </div >
      </form>
    )
  }
}

export default LoginForm;