import Colors from '../../constants/styles/colors'
import Sizes from '../../constants/styles/sizes'

let styles = {
  container: {
    height: '100%',
    background: Colors.blue.dark,
    width: `${Sizes.sidebar}%`,
    position: 'absolute',
    height: '100%',
    overflowY: 'scroll',
    zIndex: 9,
    transition: '0.25s',
    '@media (max-device-width: 992px)': {
      width: `${Sizes.sidebarMobile}%`,
    },
  },
  content: {
  },
  linkContainer: {
    display: 'block',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px 0px',
    borderTop: `1px solid transparent`,
    borderBottom: `1px solid ${Colors.grey.dark}`,
    cursor: 'pointer',
    textDecoration: 'none',
    color: Colors.blue.lighter,
    textDecoration: 'none',
    ':hover': {
    },
  },
  link: {
  },
  activeLinkContainer: {
    background: Colors.blue.primary,
    cursor: 'default',
  }
}

export default styles