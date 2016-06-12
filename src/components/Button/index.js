import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import { Link } from 'react-router';
import Styles from './styles'

const Button = Radium(React.createClass ({

  getDefaultProps: function() {
    return {
      color: 'red',
      children: 'REPLACE THIS TEXT',
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
    ]
  },

  render: function() {
    if(this.props.href) {
      return (
        <a
          {...this.props}
          style={this.buttonStyle()}
          onClick={false}
        />
      )
    }
    return (
      <span
        onClick={this.props.onClick}
        {...this.props}
        style={this.buttonStyle()}
      />
    )
  }
}))

Button.displayName = 'Button';

export default Button;
