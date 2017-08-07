import Colors from '../../constants/styles/colors'
import Sizes from '../../constants/styles/sizes'

let styles = {
  container: {
    background: Colors.blue.dark,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: `${Sizes.sidebar}%`,
    '@media (max-device-width: 992px)': {
      width: `${Sizes.sidebarMobile}%`,
    },
  },
  content: {
    flex: 1,
    overflowY: 'scroll',
    zIndex: 9,
    transition: '0.25s',
  },
  firstLinkContainer: {
    borderTop: `1px solid ${Colors.grey.dark}`,
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
  },
  ad: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    width: '100%',
    display: 'flex',
  }
}

export default styles
