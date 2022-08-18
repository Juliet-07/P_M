import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor:'green'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primaryBlue,
    marginTop: 10,
    // fontFamily:'poppingLight'
  },
  message: {
    color: colors.gray,
    fontSize: 20,
  },
  msgView: {
    marginTop: 20,
    marginBottom: 30,
    // backgroundColor:'yellow'
  },
  input: {
    flex: 2,
    marginTop:20,
    // backgroundColor: 'red',
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20,
    // backgroundColor: 'yellow',
    // back
  },
  btn:{
    backgroundColor:colors.buttonBlue
  }
});
