import Colors from '../../constants/styles/colors'

let styles = {
  container: {
  },
  title: {
    fontSize: 50,
    marginTop: 20,
    color: Colors.green.lighter,
    '@media (max-device-width: 992px)': {
      display: 'none',
    },
  },
  questionContainer: {
    display: 'inline-block',
    paddingBottom: 15,
    width: '100%',
    '@media (max-device-width: 992px)': {
      textAlign: 'center',
    },
  },
  question: {
    background: Colors.toRGB(Colors.grey.dark, 0.8),
    color: Colors.blue.lighter,
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-device-width: 992px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  answer: {
    background: Colors.toRGB(Colors.grey.dark, 0.6),
    color: Colors.blue.lighter,
    padding: 5,
    borderBottom: `1px solid ${Colors.grey.dark}`,
    '@media (max-device-width: 992px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}

export default styles