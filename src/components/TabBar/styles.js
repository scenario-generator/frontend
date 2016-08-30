import Colors from '../../constants/styles/colors'
import Sizes from '../../constants/styles/sizes'

let styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: Sizes.tabBarHeight,
    background: Colors.grey.dark,
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 10,
    boxSizing: 'border-box',
    padding: 5,
    justifyContent: 'space-around',
    '@media (min-device-width: 993px)': {
      display: 'none',
    },
  },
  tab: {
    color: Colors.blue.lighter,
    transition: '0.25s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: 'white',
  },
  tabImage: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginTop: 3,
  }
}

export default styles