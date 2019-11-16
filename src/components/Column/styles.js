import Colors from '../../constants/styles/colors'

let styles = {
  column: {
    display: 'inline-block',
    marginBottom: 15,
    flexBasis: '25%',
    '@media (max-device-width: 992px)': {
      flexBasis: '100%',
      textAlign: 'center',
    },
  },
  columnName: {
    background: Colors.toRGB(Colors.grey.dark, 0.8),
    color: Colors.blue.lighter,
    padding: 7,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-device-width: 992px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  iconsContainer: {
    display: 'flex',
  },
  icon: {
    height: 20,
    width: 20,
    cursor: 'pointer',
    marginLeft: 10,
    color: 'white'
  },
  option: {
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
