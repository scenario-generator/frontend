import Colors from '../../constants/styles/colors'

let styles = {
  column: {
    display: 'inline-block',
    flexBasis: '25%',
    marginBottom: 15,
  },
  columnName: {
    background: Colors.toRGB(Colors.grey.dark, 0.7),
    color: Colors.blue.lighter,
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    display: 'flex',
  },
  icon: {
    height: 20,
    width: 20,
    cursor: 'pointer',
    margin: -5,
    padding: 5,
    paddingBottom: 0,
    marginLeft: 5,
  },
  option: {
    background: Colors.toRGB(Colors.grey.dark, 0.5),
    color: Colors.blue.lighter,
    padding: 5,
    borderBottom: `1px solid ${Colors.grey.dark}`,
  },
}

export default styles