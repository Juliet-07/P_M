import {StyleSheet} from 'react-native';

export const styles = props =>
  StyleSheet.create({
    main: {
      flexDirection: props.flexDir ? props.flexDir : 'row',
      width: 'auto',
      height: 'auto',
      justifyContent: props.justifyContent ? props.justifyContent : 'center',
      alignItems: props.alignItems ? props.alignItems : 'center',
      marginBottom: props.marginBottom ? props.marginBottom : 0,
      marginTop: props.marginTop ? props.marginTop : 0,
    },
  });
