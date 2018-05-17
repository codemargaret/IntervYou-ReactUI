import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class QuestionsContainer extends Component {
  render() {
    return (
      <div>
        {this.state.questions.map((question) => {
            return(
              <Question question={question} key={question.id} />
            )
        })}
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
    }
  }

  componentDidMount() {
    axios.get('https://nameless-oasis-87770.herokuapp.com/questions.json')
    .then(response => {
      this.setState({questions: response.data})
    })
    .catch(error => console.log(error))
  }
}

export default QuestionsContainer;
