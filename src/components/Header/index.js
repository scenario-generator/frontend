import React, { Component } from 'react'
import Styles from './styles'
import Strings from '../../constants/strings'

export default class Header extends Component {
  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.title}>
          {Strings.headerTitle}
        </div>
      </div>
    );
  }
}
