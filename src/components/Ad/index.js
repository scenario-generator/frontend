// Libs
import Radium               from 'radium'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import StyleConstants  from '../../constants/styles/css'
import ENV             from '../../../env'


export default Radium(class Ad extends Component {
  componentDidMount() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch(err) {}
  }

  adParams() {
    if(this.props.sidebar) {
      return ENV.sidebarAd
    } else {
      return ENV.ads
    }
  }

  render() {
    if(!this.props.ckey) { return false }

    let adParams = this.adParams()

    let containerStyles = [Styles.container]
    if(this.props.sidebar) {
      containerStyles = containerStyles.concat([Styles.sidebar])
    }

    return (
      <div style={containerStyles}>
        <ins className="adsbygoogle"
          style={[Styles.ad, { height: this.props.height }]}
          data-ad-format={adParams.format}
          data-ad-layout={adParams.layout}
          data-ad-layout-key={adParams.layoutKey}
          data-ad-client={adParams.client}
          data-ad-slot={adParams.slot}
        />
      </div>
    );
  }
})
