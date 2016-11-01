// Libs
import Dfp                  from 'react-simple-dfp';
import Radium               from 'radium'
import React, { Component } from 'react'
import GoogleAd             from 'react-google-ad';

// Constants
import Styles          from './styles'
import StyleConstants  from '../../constants/styles/css'
import ENV             from '../../../env'


export default Radium(class Ad extends Component {
  renderAdsense() {
    return <GoogleAd {...ENV.ads} />
  }

  render() {
    if(!this.props.ckey) { return false }

    return (
      <div style={Styles.container}>
        {this.renderAdsense()}
      </div>
    );
  }
})
