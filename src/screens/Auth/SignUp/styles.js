import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors/index'

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginTop: 25,
    marginBottom: 40,
  },
  headText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primaryBlue,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  inputView: {
    flex: 2,
    width: '100%',
    // backgroundColor:'red'
  },
  // check: {
  //   marginTop: 20,
  //   marginBottom: 5,
  //   alignItems: 'flex-start',
  // },
  btnView: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  btn:{
    backgroundColor:colors.buttonYellow
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  texts: {
    color: 'grey',
    fontSize: 15,
  },
  login: {
    color: colors.secondaryBlue,
    // fontWeight: 'bold',
    fontSize: 20,
  },
});
