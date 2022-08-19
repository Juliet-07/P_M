import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.primaryBlue,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.gray,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 40,
    borderRadius: 30,
    backgroundColor: colors.secondaryBlue,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
