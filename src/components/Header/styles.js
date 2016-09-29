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
    '@media (max-device-width: 992px)': {
      justifyContent: 'space-around',
    },
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
  },
  hidden: {
    cursor: 'initial',
    color: 'transparent',
    height: 0,
  },
  icon: {
    height: 40,
    position: 'absolute',
    right: 10,
    top: 5,
    '@media (max-device-width: 992px)': {
      position: 'initial',
      height: 30,
      width: 42,
    },
  },
}

export default styles