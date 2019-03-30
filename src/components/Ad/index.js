// Libs
import Radium               from 'radium'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import StyleConstants  from '../../constants/styles/css'


export default Radium(class Ad extends Component {
  componentDidMount() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch(err) {}
  }

  adParams() {
    if(this.props.sidebar) {
      return {
        client:    process.env.REACT_APP_SIDEBAR_AD_CLIENT,
        slot:      process.env.REACT_APP_SIDEBAR_AD_SLOT,
        layoutKey: process.env.REACT_APP_SIDEBAR_AD_LAYOUT_KEY,
        layout:    process.env.REACT_APP_SIDEBAR_AD_LAYOUT,
        format:    process.env.REACT_APP_SIDEBAR_AD_FORMAT,
      }
    } else {
      return {
        client: process.env.REACT_APP_BANNER_AD_CLIENT,
        slot:   process.env.REACT_APP_BANNER_AD_SLOT,
        format: process.env.REACT_APP_BANNER_AD_FORMAT,
      }
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
