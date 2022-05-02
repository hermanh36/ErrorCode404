import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class QuestionIndexItem extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <li>
        <div id='question-item-container'>
          <div id='question-item-votes-answers-container'>
            <div id='question-item-vote-box'><p># vote</p></div>
            <div id='question-item-answer-box'><p id='question-item-answer'># answer</p></div>
          </div>
          <div id='question-main-container'>
            <p><Link to={`/questions/${this.props.question.id}`} id='question-title'>{this.props.question.title}</Link></p>
            <div id='question-author'><p>Created by: {this.props.question.authorUsername}</p></div>
          </div>
        </div>
      </li>
    )
  }

}

export default QuestionIndexItem;