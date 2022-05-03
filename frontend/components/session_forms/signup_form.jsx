import React from 'react';
import { withRouter } from 'react-router-dom';
// import icon from '../../../app/assets/images/icon.png';
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
      <div id='signup-page-background'>
        <form onSubmit={this.submitHandler} className='signupForm'>
          <div className='signup-form-container'>
            <div className='signup-header-container'>
              <img src={window.iconURL}/>
              <h1>Sign Up</h1>
            </div>
            <div className='signup-house'>
              <div className='signup-label-container'>
                <label htmlFor='user' className='user-label'>Username</label>
                <input className='user-field' name='user' type="text" value={this.state.username} onChange={this.update('username')} />
                <label htmlFor="email" className='email-label'>Email</label>
                <input name='email' className='email-field'type="text" value={this.state.email} onChange={this.update('email')} />
                <label htmlFor='password' className='password-label'>Password</label>
                <input name='password' className='password-field'type="password" value={this.state.password} onChange={this.update('password')} />
                <div className='signup-errors'>{this.renderErrors()}</div>
              </div>
              <input className='form-signup-btn' type="submit" value='Sign Up!' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUpForm);