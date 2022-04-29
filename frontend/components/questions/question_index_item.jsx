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
            <div id='question-item-answer-box'><p># answer</p></div>
          </div>
          <div id='question-main-container'>
            <Link id='question-title'><div><h4>{this.props.question.title}</h4></div></Link>
            <div id='question-author'><p>{this.props.question.authorUsername}</p></div>
          </div>
        </div>
      </li>
    )
  }

}

export default QuestionIndexItem;