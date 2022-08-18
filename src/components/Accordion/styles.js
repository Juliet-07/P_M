import {StyleSheet} from 'react-native';
import {colors} from '../../config/Colors';
export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    // padding: 40,
    padding: 16,
  },
  dropdown: {
    height: 60,
    borderColor: colors.gray,
    borderWidth: 1.5,
    borderRadius: 50,
    paddingHorizontal: 8,
    // backgroundColor: 'white',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
    // marginTop: 20,
  },
  icon: {
    marginRight: 5,
    // width: 18,
    // height: 18,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 4,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
