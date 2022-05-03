import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Page = ({backgroundColor, title, image, props}) => {
  return (
    <View style={styles.container} backgroundColor={backgroundColor} {...props}>
      <Image source={image} style={{width: 300, height: 500}} />
      <View style={{marginTop: 16}}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
export default Page;
