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
  }

  // Renderers

  render() {
    return (
      <DocumentTitle title={Strings.subscribePageTitle}>
        <FadedBackground random>
          asd
        </FadedBackground>
      </DocumentTitle>
    );
  }
})
