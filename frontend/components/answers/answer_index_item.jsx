import React from 'react';
require("babel-polyfill");

class AnswerIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = this.props.answer
    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onUpVote = this.onUpVote.bind(this);
    this.onDownVote = this.onDownVote.bind(this);
  }
  componentDidMount() {
    this.props.fetchVote(this.props.answer.id)
    .then((resp) => {
      if (resp) {
        this.setState({answerVotes: resp.votes})
      } else {
        this.setState({answerVotes: {}});
      }
    })    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.votes !== this.props.votes) {
      this.setState({answerVotes: this.props.votes})
    }
  }

  async checkIfVoted(voteType) {
    await this.setState({answerVotes:this.props.votes})
    let voteId = null;
    await this.props.fetchVote(this.props.answer.id)
    .then(votes => {
      if (votes){
        this.setState({answerVotes:votes.votes})  
      }
    })
    .then(() => {
      if (this.state.answerVotes){
        Object.values(this.state.answerVotes).forEach( vote => {
          if (vote.voteType === voteType) {
            if (vote.votableType === 'Answer') {
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
        await this.props.createVote({votable_id: this.props.answer.id, vote_type: 'upvote', votable_type: 'Answer'})
        .then(this.setState({answerVotes:this.props.votes}))
      } else {
        this.props.destroyVote(voteId)
        .then(this.props.createVote({votable_id: this.props.answer.id, vote_type: 'upvote', votable_type: 'Answer'}))
      }    
    } else {
      await this.props.destroyVote(voteId)
    }
  }

  async onDownVote() {
    let voteId = await this.checkIfVoted('downvote')
    if (!voteId) {
      voteId = await this.checkIfVoted('upvote')
      if (!voteId) {
        await this.props.createVote({votable_id: this.props.answer.id, vote_type: 'downvote', votable_type: 'Answer'})
        .then(this.setState({answerVotes:this.props.votes}))
      } else {
        this.props.destroyVote(voteId)
        .then(this.props.createVote({votable_id: this.props.answer.id, vote_type: 'downvote', votable_type: 'Answer'}))
      }    
    } else {
      await this.props.destroyVote(voteId)
    }
  }

  numQuestionVotes(answerId) {
    let sumVotes = 0;
    let votes = Object.values(this.props.votes)
    votes.forEach(vote => {
      if (vote.votableId === answerId && vote.votableType === 'Answer'){
        if(vote.voteType === 'upvote') {
          sumVotes +=1;
        } else {
          sumVotes -=1;
        }
      }
    })
    return sumVotes;
  }

  editHandler() {
    if (this.props.currentUserId === this.props.answer.authorId) {
      const editMenu = document.getElementById(`edit-answer-container${this.props.answer.id}`)
      editMenu.classList.toggle('edit-hidden');
    }
  }
  submitHandler() {
    const editMenu = document.getElementById(`edit-answer-container${this.props.answer.id}`)
    editMenu.classList.toggle('edit-hidden');
    this.props.updateAnswer(this.state)
    .then(() => this.props.fetchQuestion(this.props.question.id));
  }

  deleteHandler() {
    const answer = this.props.answer
    this.props.deleteAnswer(this.props.answer.id).then(() => {
      this.props.fetchQuestion(this.props.question.id);
    })
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }
  
  render() {
    if (!this.props.question || !this.state.answerVotes ){
      return null
    } else {
      return (
        <div id='main-answer'>
          <div class='answer-votes'>
            <div class='upvote' onClick={this.onUpVote}></div>
            <p id='answer-upvote'>{Object.values(this.state.answerVotes).length > 0 ? this.numQuestionVotes(this.props.answer.id) : 0  }</p>
            <div class='downvote'></div>
          </div>
          <div id='main-answer-body'>
            <div className='edit-ans-body'>
              <p id='answer-body-item'>
              {this.props.answer.body}
              </p>
              <div id={`edit-answer-container${this.props.answer.id}`} className='edit-hidden'>
                <label className='edit-answer-label'htmlFor="edit-answer">Edit Your Answer</label>
                <textarea name="edit-answer" className='edit-box'onChange={this.update('body')}id="edit-answer-textarea"></textarea>
                <button onClick={this.submitHandler} className='question-thread-author-edit'>Submit </button>
              </div>
            </div>
            <div id='ans-btn-author-container'>
              {(this.props.currentUserId === this.props.answer.authorId) 
              ?
              <div id='answer-buttons-container'>
                <button onClick={this.editHandler} className='question-thread-author-edit'>Edit</button>
                <button onClick={this.deleteHandler} className='question-thread-author-delete'>Delete</button>
              </div>
              :
              <div></div>}
              <div className='answer-thread-author'>Answered by: {this.props.answer.authorUsername}</div>
            </div>
          </div>
        </div>
      )
    }
  }
    
}

export default AnswerIndexItem;