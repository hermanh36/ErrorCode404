import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class QuestionIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let counter = 0;
    this.props.fetchVote(this.props.question.id)
    .then(res => {
      if (res.votes) {
        Object.values(res.votes).forEach(vote => {
          if (vote.votableType === 'Question'){
             counter +=1;
          }
        })
      }
    })
    .then(() => this.setState({count: counter}))
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.question.id !== this.props.question.id) {
  //     this.props.fetchVote(this.props.question.id)
  //     .then(res => {
  //       if (res.votes) {
  //         Object.values(res.votes).forEach(vote => {
  //           if (vote.votableType === 'Question'){
  //             this.count +=1;
  //           }
  //         })
  //       }
  //     })
  //   }
  // }


  render() {
    if (!this.props.votes) {
      return null
    } else {
      return (
        <li>
          <div id='question-item-container'>
            <div id='question-item-votes-answers-container'>
              <div id='question-item-vote-box'><p>{this.state.count} vote</p></div>
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

}

export default QuestionIndexItem;