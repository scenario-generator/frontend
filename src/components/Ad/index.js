// Libs
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

  renderDFP() {
    return (
      <AD
        path={`/${ENV.dfp.networkCode}/${ENV.dfp.adCode}`}
        dimensions={[1024, 768]}
        impressionViewableCallback={this.impressionViewableCallback}
      />
    )
  }

  render() {
    return (
      <div style={Styles}>
        {this.renderDFP()}
      </div>
    );
  }
})
