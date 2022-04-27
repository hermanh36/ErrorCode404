import { Link } from 'react-router-dom';
import React from 'react';
import icon from '../../images/icon.png';
class NavBar extends React.Component{
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
          <button className='nav-btn'>Profile Placeholder</button>
          <button className='nav-btn' onClick={this.logoutHandler}>Logout</button>
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
    if (!this.loggedIn()){
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
                <Link>Home</Link>
              </li>
              <li>
                <Link>Questions</Link>
              </li>
              <li>
                <Link>Users</Link>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='main-nav'>
        <div className='left-nav'>
          {this.displayLeftButton()}
        </div>
        <Link className='nav-icon'><div className='icon-container'><img src={icon}/><div className='icon-name'>Error 404</div></div></Link>
        <input type="text" className='nav-search' placeholder='Search' />
        <div className='right-nav-container'>
          {this.displayRightNav()}
        </div>
      </div>
    )
  }
}

export default NavBar