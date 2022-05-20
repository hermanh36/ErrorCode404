import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexItem from '../answers/answer_index_item';
import AnswerFormContainer from '../answers/answer_form_container';


class QuestionThread extends React.Component {
  constructor(props){
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId,() => {
      this.setState(this.props.question);
    })
  }
  componentDidUpdate() {
    if(!this.props.question){
      this.props.fetchQuestion(this.props.questionId);
    }
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
    if (!this.props.question) {
      return null;
    } else {
      return (
        <div>
          <div id='outer-thread-container'>
            <div id='question-thread-header'>
              <h1>{this.props.question.title}</h1>
              <div><Link to="/ask"><button className='ask-question' id='question-thread-ask-question'>Ask Question</button></Link></div>
            </div>
            <div id='main-question-container'>
              <div id='main-question'>
                <p id='question-upvote'># upvote</p>
                <div id='main-question-body'>
                  <p>{this.props.question.body}</p>
                  <div id='thread-btn-and-author'>
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
              </div>
            </div>
            <div id='answer-body-form-wrap'>
              <div id='main-answer-container'>
                <div>
                  <h1 id="answer-heading">Answers</h1>
                  {this.props.question.answers?.map((answer,idx) => {
                    return <div id='each-answer-container' key={idx}><AnswerIndexItem  answer={answer} deleteAnswer={this.props.deleteAnswer} history={this.props.history}
                    question={this.props.question} fetchQuestion={this.props.fetchQuestion} 
                    currentUserId={this.props.currentUserId} updateAnswer={this.props.updateAnswer} /></div>
                  })}
                </div>
              </div>
              <AnswerFormContainer question ={this.props.question} history={this.props.history}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default QuestionThread;