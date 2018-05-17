import React, { Component } from 'react';
import axios from 'axios';
import Answer from './Answer';

class Question extends Component {
  render() {
    return (
        <div className='question-block'>
          <h4>Question</h4>
          <p>{this.props.question.text}</p>
          <h4>Answers</h4>
          {this.state.answers.map((answer) => {
            return(
              <Answer answer={answer} key={answer.id} />
            )
          })}
        </div>
      )
    }

  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answers: [],
      viewingQuestionId: null
    }
  }

  componentDidMount() {
    axios.get(`https://nameless-oasis-87770.herokuapp.com/questions/${this.props.question.id}.json`)
    .then(response => {
      this.setState({question: response.data})
    })
    .catch(error => console.log(error))

    axios.get(`https://nameless-oasis-87770.herokuapp.com/questions/${this.props.question.id}/answers.json`)
    .then(response => {
      this.setState({answers: response.data})
    })
    .catch(error => console.log(error))
  }

  showAnswers = (id) => {
    this.setState({viewingQuestionId: id})
  }
}

export default Question;
