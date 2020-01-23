import React, { Component } from 'react'
import Radium               from 'radium'
import _                    from 'lodash'

// Constants
import Styles  from './styles'
import Strings from '../../constants/strings'

// Components
import Head            from '../Head'
import FadedBackground from '../FadedBackground'

let FAQ = class FAQ extends Component {
  get canonicalPath () {
    return '/faq'
  }

  get documentTitle() {
    return Strings.faq.pageTitle
  }

  // Renderers

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
      <div>
        <Head
          title={this.documentTitle}
          canonicalPath={this.canonicalPath}
        />

        <FadedBackground
          random
          style={Styles.container}>
          {this.renderQuestions()}
        </FadedBackground>
      </div>
    );
  }
}

export default Radium(FAQ)
