import React from 'react';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {question_id: this.props.question.id, body: ''};
    this.submitHandler = this.submitHandler.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
  }
  submitHandler(e) {
    e.preventDefault(); 
    this.props.fetchQuestion(this.props.question.id).then(() => {
      this.setState({ question_id: this.props.question.id }, () => {
        if (!!this.props.currentUserId) {
          this.props.createAnswer(this.state)
            .then(() => this.props.fetchQuestion(this.props.question.id));
        } else {
          this.props.history.push('/login');
        }
      })
    })
    debugger;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    if(!this.props.question) {
      return null
    } else {
      return (
        <div>
          <form id='answer-form' onSubmit={this.submitHandler}>
            <label htmlFor="answer-body">Add an Answer</label>
            <textarea name="answer-body" id="answer-body" value={this.state.body} onChange={this.update('body')}></textarea>
            <input type="submit" value="Post Your Answer" />
          </form>
        </div>
      )
    }
  }
}

export default AnswerForm;