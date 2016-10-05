// Libs
import _                    from 'lodash'
import Radium               from 'radium'
import DocumentTitle        from 'react-document-title'
import { browserHistory }   from 'react-router'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import Backgrounds     from '../../constants/images/backgrounds'
import StyleConstants  from '../../constants/styles/css'
import Strings         from '../../constants/strings'

// Components
import Button          from '../Button'
import FadedBackground from '../FadedBackground'

export default Radium(class SubscriptionPage extends Component {
  // Callbacks

  onSave() {
    this.props.actions.createSubscription(this.state.email)
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  renderEmailInput() {
    return (
      <input
        type="text"
        value={this.state.email}
        onChange={this.handleChange.bind(this)}
      />
    );
  }

  renderHeader() {
    return (
      <h1>Get Email Updates</h1>
    )
  }

  renderSubscribeButton() {
    return (
      <Button
        onClick={this.onSave.bind(this)}>
        Subscribe
      </Button>
    )
  }

  renderErrors() {
    return _.map(this.props.errors, function(error) {
      return error
    })
  }

  // Renderers

  render() {
    return (
      <DocumentTitle title={Strings.subscribePageTitle}>
        <FadedBackground random style={Styles.container}>
          {this.renderHeader()}
          {this.renderErrors()}
          {this.renderEmailInput()}
          {this.renderSubscribeButton()}
        </FadedBackground>
      </DocumentTitle>
    );
  }
})
