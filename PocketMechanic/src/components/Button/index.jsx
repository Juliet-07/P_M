import React from 'react';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import propTypes from 'prop-types';

export const Pbutton = ({
  title,
  type,
  onPress,
  loading,
  buttonStyle,
  titleStyle,
  disabled,
  props,
}) => {
  return (
    <Button
      title={title}
      type={type}
      onPress={onPress}
      color="#1A0FAA"
      titleStyle={titleStyle}
      buttonStyle={{...styles.btnContainer, ...buttonStyle}}
      loading={loading}
      disabled={disabled}
      {...props}
    />
  );
};

Pbutton.propTypes = {
  onPress: propTypes.func,
  type: propTypes.string,
  title: propTypes.string.isRequired,
  titleStyle: propTypes.object,
  buttonStyle: propTypes.object,
};
