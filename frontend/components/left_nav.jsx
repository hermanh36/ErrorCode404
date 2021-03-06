import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class LeftNav extends React.Component {

  leftNavHandler(e) {
    $(".left-nav-item").removeClass("selected");
    e.target.classList.toggle("selected");
  }

  render() {
    return(
      <div id='left-nav-container'>
        <div className='left-nav-interior'>
          <div>
            <div className='left-nav-home'><Link onClick={this.leftNavHandler} className='home left-nav-item' to='/'>Home</Link></div>
          </div>
          <div className='left-nav-public'>Public</div>
          <ul>
            <li><Link className='left-nav-question left-nav-item selected' onClick={this.leftNavHandler} to='/questions'>Questions</Link></li>
            {/* <li><Link className='left-nav-item left-nav-users' onClick={this.leftNavHandler}> Users</Link></li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default LeftNav;