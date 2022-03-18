import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryBlue,
  },
  gifView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondPart: {
    flex: 2,
    width: '100%',
    height: '50%',
  },
  logoView: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'poppins bold',
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  btnView: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btnView1: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: colors.buttonBlue,
  },
  btn2: {
    backgroundColor: colors.buttonYellow,
  },
});
