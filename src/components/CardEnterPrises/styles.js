import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentViewPrincipal: {
    flex: 1,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    margin: 15,
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,
    padding: 12
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  contentViewPhoto: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between'
  },
  textFormat: {
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
    textAlign: 'left'
  }
});

export default styles;