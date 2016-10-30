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
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    zIndex: 10,
    boxSizing: 'border-box',
  },
  errors: {
    color: Colors.green.lighter,
    marginRight: 10,
  },
  title: {
    color: Colors.blue.lighter,
    textDecoration: 'none',
    marginLeft: 15,
  },
  titleSpinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
  },
  titleContainer: {
    fontSize: 20,
  },
  button: {
  },
  hidden: {
    cursor: 'initial',
    color: 'transparent',
    height: 0,
  },
  subscription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginRight: 15,
  },
  icon: {
    height: 40,
    marginLeft: 10,
  },
}

export default styles
