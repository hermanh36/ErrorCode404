import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class LeftNav extends React.Component {


  render() {
    return(
    <div id='left-nav-container'>
      <div>
        <div><Link to='/'>Home</Link></div>
      </div>
      <p>Public</p>
      <ul>
        <li><Link to='/questions'>Questions</Link></li>
        <li><Link >Users</Link></li>
      </ul>
    </div>
    )
  }
}

export default LeftNav;