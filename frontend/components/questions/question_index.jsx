import React from 'react'
import QuestionIndexItem from './question_index_item';


class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    if (this.props.questions) {
      return (
      <div>
        <ul>
          {this.props.questions.map(question => (
            <QuestionIndexItem question={question}/>
          ))}
        </ul>
      </div>
      )
    } else {
      return null;
    }
  }
}

export default QuestionIndex