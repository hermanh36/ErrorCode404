import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class QuestionThread extends React.Component {
  constructor(props){
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId)
  }

  editHandler() {
    if (this.props.currentUserId === this.props.question.authorId) {
      this.props.history.push(`/${this.props.questionId}/edit`)
    }
  }
  deleteHandler() {
    this.props.deleteQuestion(this.props.questionId).then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    if (this.props.question) {
      return (
        <div>
          <div id='outer-thread-container'>
            <div></div>
            <div id='question-thread-container'>
              <div id='question-thread-header'>
                <h1>{this.props.question.title}</h1>
                <div><Link to="/ask"><button class='ask-question'>Ask Question</button></Link></div>
              </div>
              <div id='main-question-container'>
                <div id='main-question'>
                  <p># upvote</p>
                  <div id='main-question-body'><p>{this.props.question.body}</p></div>
                </div>
                {(this.props.currentUserId === this.props.question.authorId) ?
                <div className='question-thread-buttons'>
                  <button onClick={this.editHandler} className='question-thread-author-edit'>Edit</button>
                  <button onClick={this.deleteHandler} className='question-thread-author-delete'>Delete</button>
                </div>
                :
                <div></div>}
                <div className='question-thread-author'>Asked by: {this.props.question.authorUsername}</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default QuestionThread;