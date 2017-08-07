// Libs
import Radium               from 'radium'
import React, { Component } from 'react'

// Constants
import Styles          from './styles'
import StyleConstants  from '../../constants/styles/css'
import ENV             from '../../../env'


export default Radium(class Ad extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  adParams() {
    return ENV.ads
  }

  insStyles() {
    return {
      display: "block", 
      height: this.props.height, 
      width: '100%', 
      minWidth: 250,
    }
  }

  render() {
    if(!this.props.ckey) { return false }

    let adParams = this.adParams()

    return (
      <div style={Styles.container}>
        <ins className="adsbygoogle" 
          style={this.insStyles()} 
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
