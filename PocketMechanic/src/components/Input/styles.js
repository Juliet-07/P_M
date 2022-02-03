import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom:5,
    paddingBottom:5,
  },
  inputContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth:1,
    borderColor:'#21AFFF'
  },
  errorMessage: {
    position: 'absolute',
    color: 'red',
    paddingBottom: 10,
    fontSize: 13,
    bottom: -3,
  },
});
