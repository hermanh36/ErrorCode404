import { Link } from 'react-router-dom';
import React from 'react';
import icon from '../../../app/assets/images/icon.png';
import profilePic from '../../../app/assets/images/profile-pic.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.menuIconHandler = this.menuIconHandler.bind(this);
  }

  loggedIn() {
    if (!!this.props.currentUser === true){
      return true;
    }
    return false;
  }
  menuIconHandler() {
    const b1 = document.getElementsByClassName('bar1');
    const b2 = document.getElementsByClassName('bar2');
    const b3 = document.getElementsByClassName('bar3');
    const menuItems = document.getElementsByClassName('nav-drop-down-content');
    b1[0].classList.toggle('change');
    b2[0].classList.toggle('change');
    b3[0].classList.toggle('change');
    menuItems[0].classList.toggle('change');
  }

  logoutHandler() {
    this.props.logout(this.props.currentUser).then(()=>this.props.history.push("/"));
  }

  displayRightNav() {
    if (this.loggedIn()) {
      return (
        <div className='logged-in-right-nav'>
          <Link to="/"className='nav-btn profile-pic'><img src={profilePic}/></Link>
          <button className='nav-btn logout-btn' onClick={this.logoutHandler}>Logout</button>
        </div>
      )
    } else {
      return(
        <div className='logged-out-right-nav'>
          <Link to="/login"><button className='nav-btn login-btn'>Login</button></Link>
          <Link to="/signup"><button className='nav-btn signup-btn'>Sign Up</button></Link>
        </div>
      )
    }
  }

  displayLeftButton() {
    return (
      <div className='logged-in-left-nav'>
        <div className='menu-icon-container' onClick={this.menuIconHandler}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <div className='nav-drop-down-content'>
          <ul >
            <li>
              <Link to='/' timestamp={new Date().toString()}>Home</Link>
            </li>
            <li>
              <Link to='/questions' timestamp={new Date().toString()}>Questions</Link>
            </li>
            <li>
              <Link>Users</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='main-nav'>
        <div className='left-nav'>
          {this.displayLeftButton()}
        </div>
        <Link to='/' className='nav-icon'><div className='icon-container'><img src={icon} id='nav-icon'/><div className='icon-name'>Error 404</div></div></Link>
        <input type="text" className='nav-search' placeholder='Search' />
        <div className='right-nav-container'>
          {this.displayRightNav()}
        </div>
      </div>
    )
  }
}

export default NavBar