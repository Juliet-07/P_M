import {StyleSheet} from 'react-native';
import {colors} from '../../config/Colors';

export const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: 'white',
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 18,
  },
  titleContainer: {
    // height: 45,
    borderRadius: 1,
    justifyContent: 'center',
    // backgroundColor: colors.secondaryBlue,
  },
  textContainer: {
    flexDirection: 'row',
    height: 35,
    width: '90%',
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  titleContainerText: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 5,
  },
  iconContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    color: 'black',
    fontSize: 25,
  },
  contentContainer: {
    backgroundColor: 'black',
    flexDirection:'column'
  },
  fullNameContainer: {
    backgroundColor: '#EFEFEF',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between"
  },
  fullName: {
    backgroundColor: '#EFEFEF',
    height: 45,
    marginLeft: 20,
    width: '80%',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    marginTop: 12,
  },
  address: {
    height: 45,
    backgroundColor: '#EFEFEF',
    marginLeft: 20,
    width: '80%',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  NumberContainer: {
    backgroundColor: '#EFEFEF',
    marginTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: "center"
  },
  Number: {
    backgroundColor: '#EFEFEF',
    height: 45,
    marginLeft: 20,
    width: '80%',
    fontSize: 16,
    textAlignVertical: 'center',
  },
});
