import React from 'react';
import { Link } from 'react-router-dom';

class QuestionThread extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
  }

  render() {
    if (this.props.question) {
      return (
        <div id='outer-thread-container'>
          <div id='question-thread-container'>
            <div id='question-thread-header'>
              <h1>{this.props.question.title}</h1>
              <div><Link to="/questions/ask"><button class='ask-question'>Ask Question</button></Link></div>
            </div>
            <div id='main-question-container'>
              <div id='main-question'>
                <p># upvote</p>
                <div id='main-question-body'><p>{this.props.question.body}</p></div>
              </div>
              <div className='question-thread-author'>Asked by: {this.props.question.authorUsername}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default QuestionThread;