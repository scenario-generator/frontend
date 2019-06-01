import Colors from '../../constants/styles/colors'

let styles = {
  container: {
    color: Colors.blue.extremely_light,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 50,
    '@media (max-device-width: 992px)': {
      paddingTop: 35,
      paddingBottom: 25,
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  inputContainer: {
    width: '50%',
    marginTop: 20,
    marginBottom: 20,
    '@media (max-device-width: 992px)': {
      width: '100%',
    },
  },
  input: {
    width: '100%',
    padding: '10px 15px',
  }
}

export default styles
