import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import { Link } from 'react-router';
import Styles from './styles'

const Button = Radium(React.createClass ({

  getDefaultProps: function() {
    return {
      color: 'red',
      children: '',
      onClick: (() => alert('Assign an onClick to this button')),
    }
  },

  buttonColorStyle: function() {
    return Styles[this.props.color];
  },

  buttonStyle: function() {
    return [
      Styles.button,
      this.buttonColorStyle(),
      this.props.style,
      this.props.attached ? Styles.attached : {},
    ]
  },

  renderHiddenButton: function() {
    return (
      <span style={Styles.button} />
    )
  },

  renderLinkButton: function() {
    return (
      <span style={this.buttonStyle()}>
        <Link
          {...this.props}
          onClick={() => null}
          style={Styles.link}
        />
      </span>
    )
  },

  renderHrefButton: function() {
    return (
      <a
        {...this.props}
        style={this.buttonStyle()}
        onClick={false}
      />
    )
  },

  renderOnClickButton: function() {
    return (
      <button
        onClick={this.props.onClick}
        {...this.props}
        style={this.buttonStyle()}
      />
    )
  },

  render: function() {
    if(this.props.hidden) { return this.renderHiddenButton() }
    if(this.props.to)     { return this.renderLinkButton() }
    if(this.props.href)   { return this.renderHrefButton() }
    return this.renderOnClickButton()
  }
}))

Button.displayName = 'Button';

export default Button;
