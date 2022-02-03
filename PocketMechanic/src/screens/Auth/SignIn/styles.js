import {StyleSheet} from 'react-native';
import theme from '../../../config/Theme/index';

export const styles = StyleSheet.create({
  main: {
    maxWidth: 500,
  },
  header: {
    marginTop: 20,
    width: '100%',
    marginBottom: 30,
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: theme.primary,
  },
  input: {
    flex: 2,
    width: '100%',
    // backgroundColor:'red'
  },
  check:{
    marginTop: 20,
    marginBottom: 5,
    alignItems: "flex-start"
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  texts: {
    color: 'grey',
    fontSize: 20,
  },
  signUp: {
    color: theme.secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
