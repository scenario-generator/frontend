import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import Colors from '../../constants/styles/colors'
import Backgrounds from '../../constants/images/backgrounds'
import Styles from './styles'

export default Radium(class FadedBackground extends Component {
  backgroundImage() {
    if(this.props.image) { return this.props.image }
    if(this.props.random) { return _.sample(Backgrounds) }
  }

  backgroundStyles() {
    let backgroundImageStyles;
    if(this.backgroundImage()) {
      let imagePath = this.backgroundImage()
      backgroundImageStyles = {
        backgroundImage: imagePath,
        backgroundImage: `-moz-linear-gradient(top, transparent 0%, ${Colors.blue.primary} 75%), ${imagePath}`,
        backgroundImage: `-webkit-gradient(linear, left top, left bottom, color-stop(0%, transparent), color-stop(75%, ${Colors.blue.primary})), ${imagePath}`,
        backgroundImage: `linear-gradient(to bottom, transparent, ${Colors.blue.primary}), ${imagePath}`,
        filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr='transparent', endColorstr='${Colors.blue.primary}', GradientType=0)`
      }
    }
    return [
      Styles.backgroundStyles,
      backgroundImageStyles,
      this.props.style,
    ]
  }

  render() {
    return (
      <div {...this.props} style={Styles.container}>
        <div style={this.backgroundStyles()} />
        <div style={[Styles.children, this.props.style]}>{this.props.children}</div>
      </div>
    )
  }
})
