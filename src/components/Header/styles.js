import Colors from '../../constants/styles/colors'
import Sizes from '../../constants/styles/sizes'

let styles = {
  container: {
    display: 'flex',
    height: Sizes.headerHeight,
    width: '100%',
    background: Colors.grey.dark,
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    boxSizing: 'border-box',
  },
  title: {
    color: Colors.blue.lighter,
    textDecoration: 'none',
    marginLeft: 15,
    '@media (max-device-width: 992px)': {
      marginLeft: 50,
      marginRight: 50,
      color: Colors.blue.light,
    },
  },
  titleContainer: {
    fontSize: 20,
  },
  button: {
  },
  mobileButton: {
    color: Colors.blue.lighter,
    cursor: 'pointer',
  }
}

export default styles