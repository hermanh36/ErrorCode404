import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class QuestionIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchVote(this.props.question.id)
    .then(votes => {
      if (votes) {
        this.setState({numVotes:Object.values(votes.votes).length})
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question.id !== this.props.question.id) {
      this.props.fetchVote(this.props.question.id)
      .then(votes => {
        if (votes) {
          this.setState({numVotes:Object.values(votes.votes).length})
        }
      })
    }
  }


  render() {
      return (
        <li>
          <div id='question-item-container'>
            <div id='question-item-votes-answers-container'>
              <div id='question-item-vote-box'><p>{this.state?.numVotes ? this.state.numVotes : 0} vote</p></div>
              <div id='question-item-answer-box'><span id='question-item-answer'>{this.props.question?.answers ? this.props.question.answers.length : 0} answer</span></div>
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