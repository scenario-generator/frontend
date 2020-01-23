import React, { Component } from 'react'
import Radium from 'radium'

// Constants
import Styles  from './styles'
import Strings from '../../constants/strings'
import CSS     from '../../constants/styles/css'

// Components
import Head            from '../Head'
import FadedBackground from '../FadedBackground'

let NotFound = class NotFound extends Component {
  get documentTitle() {
    return Strings.rootPageTitle
  }

  get email() {
    return process.env.REACT_APP_CONTACT_EMAIL
  }

  // Renderers

  render() {
    return (
      <div>
        <Head title={this.documentTitle} />

        <FadedBackground
          random
          style={Styles.text}>
          <div style={Styles.oops}>Oops!</div>
          <div>You weren't supposed to end up here.</div>
          <div>
            If there should be a page here and there isn't you can let me know at {
              <a
                style={CSS.link}
                href={`mailto:${this.email}`}>
                {this.email}
              </a>
            }
          </div>
        </FadedBackground>
      </div>
    );
  }
}

export default Radium(NotFound)
