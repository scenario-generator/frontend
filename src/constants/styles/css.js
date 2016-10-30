import Colors from './colors'

let css = {
  link: {
    color: Colors.green.lighter,
  },
  mobile: {
    '@media (min-device-width: 993px)': {
      display: 'none',
    },
  },
  desktop: {
    '@media (max-device-width: 992px)': {
      display: 'none',
    },
  },
  forms: {
    input: {
      display: 'inline-block',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'black',
      padding: '5px 10px',
      borderRadius: 5,
      background: Colors.grey.lighter,
      outline: 0,
      transition: '0.2s',
      boxSizing: 'border-box',
      ':focus': {
        borderColor: Colors.blue.lighter,
      },
    },
    inputWithButton: {
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    element: {
      marginBottom: 10,
    },
  },
}

export default css