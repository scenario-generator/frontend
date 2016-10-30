import React, { Component } from 'react'
import Radium from 'radium';

import HeaderDesktop from './desktop'
import HeaderMobile  from './mobile'

export default Radium(class Header extends Component {
  title() {
    switch (this.props.path) {
    case '/generators':
      return 'All Games'
    case '/subscribe':
      return 'Subscribe'
    case '/faq':
      return 'FAQ'
    default:
      return this.props.generator.name;
    }
  }

  render() {
    return (
      <div>
        <HeaderDesktop {...this.props} title={this.title()} />
        <HeaderMobile  {...this.props} title={this.title()} />
      </div>
    )
  }
})
