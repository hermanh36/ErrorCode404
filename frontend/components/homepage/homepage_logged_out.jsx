import React from 'react'
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';
import splashBackground from '../../images/splash-background.jpg'


class HomePage extends React.Component {

  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <div className= 'main-pane-container'>
        <div className='main-pane'>
          <div className='intro-container'>
            <h1>Every&nbsp;<TextLoop className='loop'
            children={['student', 'developer', 'instructor', 'data scientist', 'analyst']}
            interval={1000}
            >
            </TextLoop>&nbsp;has a error that needs to be solved!</h1>
          </div>
          <div className='join-now-container'>
            <span>Find the answer to all your bugs!</span>
            <span>Or help others with your expertise.</span>
            <Link to='/signup' className='homepage-join-now-link'><div>Join Now</div></Link>
          </div>
          <div className='homepage-bar'></div>
          <div className='splash-about'>
            <p>This website is modeled after Stack Overflow.
               Here, users have a platform in which they can ask
               questions about their super annoying bugs, and help
               the others by giving their professional input the the community.
            </p>
          </div>
          <div className='about-container'>
            <div className='frontend-description-container'>
              <p>This application uses React, Redux, and Javascript for the frontend logic
                 HTML and CSS is used to display and style the website.
              </p>
            </div>
            <div className='backend-description-container'>
              <p>The backend of this application is built off of a Ruby on Rails
                 and PostgreSQL database. The data is passed though as json through
                 a jBuilder object and AJAX requests are used to transfer data.
              </p>
            </div>
          </div>
          <div className='functionality-description-container'>
            <p>Users are able to sign up an account and login to the application.
                Users can also view other users' questions. While logged in,
                users can create, update, and delete questions, answers, and comments.
                They can also upvote questions and answers that others have posted.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;