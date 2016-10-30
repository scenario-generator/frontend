import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import FadedBackground from '../FadedBackground'
import Styles from './styles'
import CSS from '../../constants/styles/css'
import ENV from '../../../env'

let NotFound = class NotFound extends Component {
  email() {
    return ENV.email
  }

  render() {
    let email = this.email();

    return (
      <FadedBackground
        random
        style={Styles.text}>
        <div style={Styles.oops}>Oops!</div>
        <div>You weren't supposed to end up here.</div>
        <div>
          If there should be a page here and there isn't you can let me know at {
            <a
              style={CSS.link}
              href={`mailto:${email}`}>
              {email}
            </a>
          }
        </div>
      </FadedBackground>
    );
  }
}

export default Radium(NotFound)