import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 20,
  },
  header: {
    marginTop: 20,
    width: '100%',
    // backgroundColor: 'red',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primary,
    // fontFamily:'poppingLight'
  },
  message: {
    color: colors.secondary,
    fontSize: 20,
  },
  msgView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    // backgroundColor:'yellow'
  },
  input: {
    flex: 2,
    width: '100%',
    // backgroundColor: 'red',
  },
  btnView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor:colors.secondary
  },
});
