import Colors from '../../constants/styles/colors'

let styles = {
  rerollButton: {
    display: 'block',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  title: {
    fontSize: 50,
    marginTop: 20,
    color: Colors.green.lighter,
    '@media (max-device-width: 992px)': {
      display: 'none',
    },
  },
  buttonBar: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-device-width: 992px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}

export default styles