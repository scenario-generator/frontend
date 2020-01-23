// Libs
import _                    from 'lodash'
import Radium               from 'radium'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import Backgrounds     from '../../constants/images/backgrounds'
import StyleConstants  from '../../constants/styles/css'
import Strings         from '../../constants/strings'

// Components
import Head            from '../Head'
import Button          from '../Button'
import FadedBackground from '../FadedBackground'

export default Radium(class SubscriptionPage extends Component {
  get canonicalPath () {
    return '/subscribe'
  }

  // Callbacks

  onSave() {
    this.props.actions.createSubscription(this.state.email)
  }

  onChange(event) {
    this.setState({email: event.target.value});
  }

  renderEmailInput() {
    return (
      <input
        type="text"
        value={this.state.email}
        onChange={this.onChange.bind(this)}
        style={[StyleConstants.forms.input, Styles.input]}
        placeholder={Strings.subscribe.placeholder}
        autoFocus
      />
    );
  }

  renderSubscribeButton() {
    return (
      <Button
        color={'orange'}
        onClick={this.onSave.bind(this)}
        text={'Subscribe'}
      />
    )
  }

  renderErrors() {
    return _.map(this.props.errors, function(error) {
      return error
    })
  }

  renderPitch() {
    return _.map(Strings.subscribe.pitch, function(pitchLine) {
      return <div>{pitchLine}</div>
    })
  }

  // Renderers

  render() {
    let formElementCSS = StyleConstants.forms.element;

    return (
      <div>
        <Head
          title={Strings.subscribePageTitle}
          canonicalPath={this.canonicalPath}
        />

        <FadedBackground
          image={Backgrounds['Endless Legend']}
          style={Styles.container}>
          {this.renderPitch()}
          <div style={formElementCSS}>{this.renderErrors()}</div>
          <div style={[formElementCSS, Styles.inputContainer]}>{this.renderEmailInput()}</div>
          <div style={formElementCSS}>{this.renderSubscribeButton()}</div>
        </FadedBackground>
      </div>
    );
  }
})
