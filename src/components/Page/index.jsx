import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

// to be rendered in subtitle of onboarding
const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default Title;
