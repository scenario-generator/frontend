import Colors from '../../constants/styles/colors'
import Sizes from '../../constants/styles/sizes'

let styles = {
  container: {
    display: 'flex',
    height: Sizes.headerHeight,
    width: '100%',
    background: Colors.grey.dark,
    alignItems: 'center',
    padding: '0px 10px',
  },
  title: {
    fontSize: 20,
    color: Colors.blue.lighter,
  }
}

export default styles