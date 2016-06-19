import Colors from '../../constants/styles/colors'

let styles = {
  rerollButton: {
    display: 'block',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  title: {
    fontSize: 50,
    marginTop: 20,
    color: Colors.green.lighter,
  },
  buttonBar: {
    marginTop: 30,
    marginBottom: 30,
  },
  scenario: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
  },
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
  rerollIcon: {
    width: 20,
  },
  option: {
    background: Colors.toRGB(Colors.grey.dark, 0.5),
    color: Colors.blue.lighter,
    padding: 5,
    borderBottom: `1px solid ${Colors.grey.dark}`,
  },
}

export default styles