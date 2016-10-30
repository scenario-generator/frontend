import Colors from '../../constants/styles/colors'

const buttonColor = function(background, hover, active) {
  return {
    transition: '0.25s',
    background: background,
    border: `2px solid black`,
    color: 'black',
    ':hover': {
      background: hover,
    },
    ':active': {
      background: active,
    },
  }
}

export default {
  button: {
    padding: '7px 15px',
    borderRadius: 5,
    fontSize: 14,
    cursor: 'pointer',
    display: 'inline-flex',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 130,
    boxSizing: 'content-box',
    '@media (max-device-width: 992px)': {
      width: 150,
      fontSize: 18,
    },
  },
  attached: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 'initial',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  red: buttonColor(Colors.red.light, Colors.red.primary, Colors.red.dark),
  blue: buttonColor(Colors.blue.light, Colors.blue.primary, Colors.blue.dark),
  green: buttonColor(Colors.green.light, Colors.green.primary, Colors.green.dark),
  purple: buttonColor(Colors.purple.light, Colors.purple.primary, Colors.purple.dark),
  orange: buttonColor(Colors.orange.light, Colors.orange.primary, Colors.orange.dark),
}
