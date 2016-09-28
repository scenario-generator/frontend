// Libs
import Dfp                  from 'react-simple-dfp';
import Radium               from 'radium'
import React, { Component } from 'react'
import AD                   from 'react-google-publisher-tag';

// Constants
import Styles          from './styles'
import StyleConstants  from '../../constants/styles/css'
import ENV             from '../../../env'


export default Radium(class Ad extends Component {
  renderAdsense() {
    return <GoogleAd {...ENV.ads} />
  }

  adUnitPath() {
    return `/${ENV.dfp.networkCode}/${ENV.dfp.adCode}`
  }

  desktopSize() {
    return [970, 90]
  }

  mobileSize() {
    return [320, 50]
  }

  renderDFP(style, size) {
    return (
      <div style={style}>
        <Dfp adUnitPath={this.adUnitPath()} adSize={size} adCollapse={false} />
      </div>
    )
  }

  render() {
    return (
      <div style={Styles.container}>
        {this.renderDFP(StyleConstants.desktop, this.desktopSize())}
        {this.renderDFP(StyleConstants.mobile, this.mobileSize())}
      </div>
    );
  }
})
