import {StyleSheet} from 'react-native';
import { colors } from '../../../config/Colors';
import theme from '../../../config/Theme/index';

export const styles = StyleSheet.create({
  main: {
    maxWidth: 500,
    height: 500,
    // backgroundColor:'red'
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
    color: theme.primaryBlue,
  },
  input: {
    flex: 2,
    width: '100%',
    // backgroundColor:'red'
  },
  check: {
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'flex-start',
  },
  btnView: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
  texts1: {
    color: colors.secondaryBlue,
    fontSize: 20,
  },
  signUp: {
    color: theme.primaryBlue,
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    color: colors.buttonYellow,
  },
});
