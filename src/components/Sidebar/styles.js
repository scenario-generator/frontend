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
  closed: {
    '@media (max-device-width: 992px)': {
      left: '-100%',
    },
  },
  open: {
    '@media (max-device-width: 992px)': {
      left: 0,
    },
  },
  content: {
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px 0px',
    borderTop: `1px solid transparent`,
    margin: '0px 10px',
    borderBottom: `1px solid ${Colors.grey.dark}`,
    ':hover': {
    },
  },
  link: {
    color: Colors.blue.lighter,
    textDecoration: 'none',
    cursor: 'pointer',
  }
}

export default styles