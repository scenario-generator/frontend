import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import FadedBackground from '../FadedBackground'
import Styles from './styles'
import Strings from '../../constants/strings'

let FAQ = class FAQ extends Component {
  renderQuestions() {
    return _.map(Strings.faq.questions, (answer, question) => (
      this.renderQuestion(question, answer)
    ))
  }

  randomKey() {
    return Math.floor((Math.random() * 100000) + 1)
  }

  renderQuestion(question, answer) {
    return (
      <div style={Styles.questionContainer} key={this.randomKey()}>
        <div style={Styles.question}>{question}</div>
        <div style={Styles.answer} dangerouslySetInnerHTML={{__html: answer}} />
      </div>
    )
  }

  render() {
    return (
      <FadedBackground
        random
        style={Styles.container}>
        {this.renderQuestions()}
      </FadedBackground>
    );
  }
}

export default Radium(FAQ)
