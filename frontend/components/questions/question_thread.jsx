import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexItem from '../answers/answer_index_item';
import AnswerFormContainer from '../answers/answer_form_container';
import AnswerIndexItemContainer from '../answers/answer_index_item_container';
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
    .then((resp) => {
      if (resp) {
        this.setState({questionVote: resp.votes})
      } else {
        this.setState({questionVote: {}});
      }
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

  initialVoteCheck(voteType) {
    let voteId = null;
    let questionVotes = this.state.questionVote
    if (Object.values(questionVotes).length > 0){
      Object.values(questionVotes).forEach( vote => {
        if (vote.voteType === voteType) {
          if (vote.votableType === 'Question' && (parseInt(vote.votableId) === parseInt(this.props.questionId))) {
            if (vote.voterId === this.props.currentUserId) {
              voteId = vote.id
            }
          }
        }
      })
    }
    return voteId
  }

  async checkIfVoted(voteType) {
    await this.setState({questionVote:this.props.votes})
    let voteId = null;
    await this.props.fetchVote(this.props.questionId)
    .then(votes => {
      if (votes){
        this.setState({questionVote:votes.votes})  
      }
    })
    .then(() => {
      if (this.state.questionVote){
        Object.values(this.state.questionVote).forEach( vote => {
          if (vote.voteType === voteType) {
            if (vote.votableType === 'Question' && (parseInt(vote.votableId) === parseInt(this.props.questionId))) {
              if (vote.voterId === this.props.currentUserId) {
                voteId = vote.id
              }
            }
          }
        })
      }
    })
    this.checkVoted = voteId;
    return voteId
  }


  async onUpVote() {
    let voteId = await this.checkIfVoted('upvote')
    if (!voteId) {
      voteId = await this.checkIfVoted('downvote')
      if (!voteId) {
        await this.props.createVote({votable_id: this.props.questionId, vote_type: 'upvote', votable_type: 'Question'})
        .then(() => this.setState({questionVote:this.props.votes}))
      } else {
        await  this.props.destroyVote(voteId)
        .then(() => this.props.createVote({votable_id: this.props.questionId, vote_type: 'upvote', votable_type: 'Question'}))
        .then(() => this.setState({questionVote: this.props.votes}))
      }    
    } else {
      await this.props.destroyVote(voteId)
      .then(() => this.setState({questionVote:this.props.votes}))
    }
  }

  async onDownVote() {
    let voteId = await this.checkIfVoted('downvote')
    if (!voteId) {
      voteId = await this.checkIfVoted('upvote')
      if (!voteId) {
        await this.props.createVote({votable_id: this.props.question.id, vote_type: 'downvote', votable_type: 'Question'})
        .then(() => this.setState({questionVote:this.props.votes}))
      } else {
        await this.props.destroyVote(voteId)
        .then(() => this.props.createVote({votable_id: this.props.question.id, vote_type: 'downvote', votable_type: 'Question'}))
        .then(() => this.setState({questionVote:this.props.votes}))
      }    
    } else {
      await this.props.destroyVote(voteId)
      .then(() => this.setState({questionVote:this.props.votes}))
    }
  }

  

  numQuestionVotes(questionId) {
    let sumVotes = 0;
    let votes = Object.values(this.state.questionVote)
    votes.forEach(vote => {
      if (parseInt(vote.votableId) === parseInt(questionId) && vote.votableType === 'Question'){
        if(vote.voteType === 'upvote') {
          sumVotes +=1;
        } else {
          sumVotes -=1;
        }
      }
    })
    return sumVotes;
  }

  render() {
    if (!this.props.question || !this.state.questionVote) {
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
                  { !this.initialVoteCheck("upvote") ?
                    <div className='upvote' onClick={this.onUpVote}></div>
                    :
                    <div className='upvoted' onClick={this.onUpVote}></div> 
                  }
                  {/* <div className='upvote' onClick={this.onUpVote}></div> */}
                  <p id='question-upvote'>{Object.values(this.state.questionVote).length > 0 ? this.numQuestionVotes(this.props.questionId) : 0 }</p>
                  { !this.initialVoteCheck("downvote") ?
                    <div className='downvote' onClick={this.onDownVote}></div>
                    :
                    <div className='downvoted' onClick={this.onDownVote}></div> 
                  }
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
                    return (<div id='each-answer-container'  key={idx}><AnswerIndexItemContainer answer={answer} 
                    deleteAnswer={this.props.deleteAnswer}  history={this.props.history} 
                    question={this.props.question} fetchQuestion={this.props.fetchQuestion} 
                    updateAnswer={this.props.updateAnswer} /></div>)
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