import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <div>
        <h4>Answer</h4>
        <p>{this.props.answer.text}</p>
      </div>
    )
  }
}

export default Answer;
