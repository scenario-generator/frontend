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
  }
}

export default css