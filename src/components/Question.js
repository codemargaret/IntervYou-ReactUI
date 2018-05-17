import React, { Component } from 'react';
import axios from 'axios';
import Answer from './Answer';
import '../App.css';

class Question extends Component {
  render() {
    const isClicked = this.state.isClicked;
    return (
        <div className='question-block'>
          <h4>Question</h4>
          <p>{this.props.question.text}</p>

          {this.state.answers.map((answer) => {
            if (isClicked) {
              return(
                <Answer answer={answer} key={answer.id} />
              )
            } else {
              return(
                <button className="answerButton"onClick={this.handleClick} key={answer.id}>Show answers</button>
              )
            }
          })}
        </div>
      )
    }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      answers: []
    }
  }

  componentDidMount() {
    axios.get(`https://nameless-oasis-87770.herokuapp.com/questions/${this.props.question.id}/answers.json`)
    .then(response => {
      this.setState({answers: response.data})
    })
    .catch(error => console.log(error))
  }

  handleClick() {
      this.setState({isClicked: true});
  }
}

export default Question;
