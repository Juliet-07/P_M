import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
  },
  text: {
    height: 100,
    paddingVertical: 30,
    paddingTop: 0,
    marginTop: 20,
  },
  btnView: {
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 100,
    // backgroundColor:'red'
  },
  btn: {
    backgroundColor: colors.buttonYellow,
  },
});
