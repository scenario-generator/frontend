import Colors from '../../../constants/styles/colors'
import Sizes  from '../../../constants/styles/sizes'

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
    justifyContent: 'space-around',
  },
  title: {
    color: Colors.blue.lighter,
    textDecoration: 'none',
    marginLeft: 10,
  },
  titleContainer: {
    fontSize: 20,
  },
  button: {
    color: Colors.blue.lighter,
    cursor: 'pointer',
    width: 42,
    textAlign: 'center',
  },
  hidden: {
    cursor: 'initial',
    color: 'transparent',
    height: 0,
  },
  icon: {
    height: 40,
    height: 30,
    width: 42,
  },
}

export default styles