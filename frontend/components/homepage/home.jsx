import { Link } from 'react-router-dom';
import React from 'react';
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  loggedIn() {
    if (this.props.currentUser){
      return true;
    }
    return false;
  }

  logoutHandler() {
    this.props.logout(this.props.currentUser).then(()=>this.props.history.push("/"));
  }

  display() {
    if (this.loggedIn()) {
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
      )
    } else {
      return(
        <div>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        {this.display()}
      </div>
    )
  }
}

export default Home