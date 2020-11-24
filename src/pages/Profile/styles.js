import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10

  },
  viewPhoto: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#E6E6FA'
  },
  viewProfile: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
    borderTopWidth: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    padding: 8
  },
  profileText: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
  profileFormatText: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10
  },
  viewName: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginVertical: 15,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewEmail: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginVertical: 15,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewAdress: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginVertical: 15,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  balanceFormat: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#B0C4DE',
    padding: 10
  }
});

export default styles;

