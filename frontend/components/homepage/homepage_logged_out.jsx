import React from 'react'
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';
// import lightBulb from '../../../app/assets/images/light-bulb.png'
// import question from '../../../app/assets/images/asking.png'
// import upvote from '../../../app/assets/images/transfer.png'
// import ruby from '../../../app/assets/images/ruby.png'
// import react from '../../../app/assets/images/react-symbol.png'
// import icon from '../../../app/assets/images/icon.png'


class HomePage extends React.Component {

  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <div>
        <div className='homepage-background'>
          <div className= 'main-pane-container'>
            <div className='main-pane'>
              <div className='join-parent'>
                <div className='question'>
                  <img src={window.askingURL}/>
                  <p>Ask a Question</p>
                  <p>Give an Answer</p>
                  <p>Write a Comment</p>
                </div>
                <div className='join-now-container'>
                  <img src={window.lightBulbURL}/>
                  <p className='join-text'>Have an error you can't figure out? Is the new technology
                    difficult to learn on your own?<br /> Error404 is here to help you out!<br />Join today to connect with the community and
                    find the answer to all your bugs!</p>
                  <Link to='/signup' className='homepage-join-now-link'><div>Join Now</div></Link>
                </div>
                <div className='upvote'>
                  <img src={window.transferURL} />
                  <p>Upvote and Downvote</p>
                  <p>Vote on Questions</p>
                  <p>Vote on Answers</p>
                </div>
              </div>
              <div className='intro-container'>
                <h1>Every&nbsp;<TextLoop className='loop'
                children={['student', 'developer', 'instructor', 'data scientist', 'analyst']}
                interval={1000}
                >
                </TextLoop>&nbsp;has a bug that needs to be fixed!</h1>
              </div>
              <div className='splash-about'>
                <div className='splash-text'>This website is modeled after Stack Overflow.
                  Here, users have a platform in which they can ask
                  questions about their super annoying bugs, and help
                  the others by giving their professional input the the community.
                </div>
              </div>
              <div className='homepage-bar'></div>
              <div className='about-container'>
                <div className='frontend-description-container'>
                  <p>This application uses React, Redux, and Javascript for the frontend logic
                    HTML and CSS is used to display and style the website.
                  </p>
                  <img src={window.reactURL} alt="" className='react' />
                </div>
                <div className='backend-description-container'>
                  <p>The backend of this application is built off of a Ruby on Rails
                    and PostgreSQL database. The data is passed though as json through
                    a jBuilder object and AJAX requests are used to transfer data.
                  </p>
                  <img src={window.rubyURL} alt="" className='ruby' />
                </div>
              </div>
              <div className="functionality-parent">
                <div className='functionality-description-container'>
                  <img src={window.iconURL} id='icon' />
                  <p>Users are able to sign up an account and login to the application.
                      Users can also view other users' questions. While logged in,
                      users can create, update, and delete questions, answers, and comments.
                      They can also upvote questions and answers that others have posted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='outro-background'>
          <div className='outro-container'>
            <img src={window.iconURL} alt="" id='outro-icon'/>
            <div id='outro-text'>
              <span id='outro-header'><p id='outro-name'>Error 404&nbsp;</p><p id='outro-author'>Created by Herman He</p></span>
              <p id='outro-contributors'>Icons made by various contributers on icons8.com  </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;