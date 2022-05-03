import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import RoundedButton from '../Button/roundedButton';

const Footer = ({
  backgroundColor,
  rightButtonLabel = false,
  rightButtonPress = false,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGTH = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        height: HEIGTH,
        backgroundColor,
        opacity: 0.6,
        paddingHorizontal: FOOTER_PADDING,
      }}>
      <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
    </View>
  );
};
export default Footer;
