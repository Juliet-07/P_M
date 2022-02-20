import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
  },
  gifView: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  gif: {
    fontFamily: 'poppins bold',
    fontSize: 30,
    color: 'white',
  },
  logoView: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  logoText: {
    fontFamily: 'poppins bold',
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  btnView: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    marginTop: 50,
    marginBottom:30,
    justifyContent: 'center',
  },
  btnView1: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1:{
    backgroundColor:colors.buttonBlue
  },
  btn2:{
    backgroundColor:colors.buttonYellow
  }
});
