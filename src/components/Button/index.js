import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import Styles from './styles'

const Button = Radium(React.createClass ({
  getDefaultProps: function() {
    return {
      color: 'red',
      children: '',
      onClick: (() => alert('Assign an onClick to this button')),
      attached: false,
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
          to={this.props.to}
          onClick={() => null}
          style={Styles.link}
        >
          {this.props.text}
        </Link>
      </span>
    )
  },

  renderHrefButton: function() {
    return (
      <a
        href={this.props.href}
        style={this.buttonStyle()}
        onClick={false}
      >
        {this.props.text}
      </a>
    )
  },

  renderOnClickButton: function() {
    return (
      <button
        onClick={this.props.onClick}
        style={this.buttonStyle()}
      >
        {this.props.text}
      </button>
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
