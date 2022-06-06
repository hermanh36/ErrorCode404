import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexItem from '../answers/answer_index_item';
import AnswerFormContainer from '../answers/answer_form_container';
require("babel-polyfill");


class QuestionThread extends React.Component {
  constructor(props){
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {};
    this.onUpVote = this.onUpVote.bind(this);
    this.onDownVote = this.onDownVote.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId)
    this.props.fetchVote(this.props.questionId)
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

  async checkIfVoted(voteType) {
    await this.setState({questionVotes:this.props.votes})
    let voteId = null;
    await this.props.fetchVote(this.props.questionId)
    .then(votes => {
      if (votes){
        this.setState({questionVotes:votes.votes})  
      }
    })
    .then(() => {
      if (this.state.questionVotes){
        Object.values(this.state.questionVotes).forEach( vote => {
          if (vote.voteType === voteType) {
            if (vote.votableType === 'Question') {
              if (vote.voterId === this.props.currentUserId) {
                voteId = vote.id
              }
            }
          }
        })
      }
    })
    return voteId
  }


  async onUpVote() {
    let voteId = await this.checkIfVoted('upvote')
    if (!voteId) {
      voteId = await this.checkIfVoted('downvote')
      if (!voteId) {
        await this.props.createVote({votable_id: this.props.question.id, vote_type: 'upvote', votable_type: 'Question'})
      } else {
        this.props.destroyVote(voteId)
        .then(this.props.createVote({votable_id: this.props.question.id, vote_type: 'upvote', votable_type: 'Question'}))
      }    
    } else {
      await this.props.destroyVote(voteId)
    }
  }

  async onDownVote() {
    let voteId = await this.checkIfVoted('downvote')
    debugger;
    if (!voteId) {
      voteId = await this.checkIfVoted('upvote')
      if (!voteId) {
        await this.props.createVote({votable_id: this.props.question.id, vote_type: 'downvote', votable_type: 'Question'})
      } else {
        debugger;
        this.props.destroyVote(voteId)
        .then(this.props.createVote({votable_id: this.props.question.id, vote_type: 'downvote', votable_type: 'Question'}))
      }    
    } else {
      await this.props.destroyVote(voteId)
    }
  }

  

  numQuestionVotes(questionId) {
    let counter = 0;
    let votes = Object.values(this.props.votes)
    votes.forEach(vote => {

      if (vote.votableId === questionId && vote.votableType === 'Question'){
        counter+=1;
      }
    })
    return counter;
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
                <div className='question-votes'>
                  <div className='upvote' onClick={this.onUpVote}></div>
                  <p id='question-upvote'>{Object.values(this.props.votes).length > 0 ? this.numQuestionVotes(this.props.question.id) : 0  }</p>
                  <div className='downvote' onClick={this.onDownVote}></div>
                </div>
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
                    return <div id='each-answer-container' fetchVotes={this.props.fetchVotes} key={idx}><AnswerIndexItem  answer={answer} deleteAnswer={this.props.deleteAnswer} history={this.props.history}
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