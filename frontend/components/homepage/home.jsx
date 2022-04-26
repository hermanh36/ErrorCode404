import { Link } from 'react-router-dom';
import React from 'react';
class Home extends React.Component{
  constructor(props) {
    super(props);
  }

  loggedIn() {
    !!this.props.currentUser
  }

  display() {
    if (this.loggedIn()) {
      return (
        <h1>Welcome {this.props.currentUser.username}</h1>
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
    return this.display()
  }
}

export default Home