import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'relative',
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 0,
    marginBottom: 3,
    paddingBottom: 5,
  },
  inputContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 0.7,
    borderColor: '#0B04FF',
    backgroundColor: '#fff',
  },
  errorMessage: {
    position: 'absolute',
    color: 'red',
    paddingBottom: 10,
    fontSize: 13,
    bottom: -3,
  },
});
