import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class QuestionsContainer extends Component {
  render() {
    return (
      <div>
        {this.state.questions.map((question) => {
          return(
            <div key={question.id} >
              <BrowserRouter>
                <Link to={`/questions/${question.id}`}>{question.text}</Link>
              </BrowserRouter>
            </div>
          )
        })}
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios.get('https://nameless-oasis-87770.herokuapp.com/questions.json')
    .then(response => {
      console.log(response)
      this.setState({questions: response.data})
    })
    .catch(error => console.log(error))
  }
}

export default QuestionsContainer;
