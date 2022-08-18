import React from 'react';
import {Input, Text} from 'react-native-elements';
import {View} from 'react-native';
import propTypes from 'prop-types';
import {useField} from 'formik';
import {styles} from './styles';

export const Pinput = props => {
  const {
    name,
    value,
    errorMsg,
    keyboardType,
    multiline,
    numberOfLines,
    containerStyles,
    inputContainerStyles,
    handleChange,
    leftIcon,
    rightIcon,
    ...otherProps
  } = props;
  const [field, meta, helpers] = useField(props);
  return (
    <React.Fragment>
      <View style={styles.main}>
        <Input
          name={name}
          value={value[name]}
          onChange={handleChange}
          placeholderTextColor="#7C7C7C"
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          containerStyle={{...styles.container, ...containerStyles}}
          inputContainerStyle={{
            ...styles.inputContainer,
            ...inputContainerStyles,
          }}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          errorMessage={errorMsg}
          errorStyle={{color: 'red', marginTop: 0}}
          underlineColorAndroid="transparent"
          {...props}
          {...otherProps}
        />
        <Text style={styles.errorMessage}>{meta.touched && meta.error}</Text>
      </View>
    </React.Fragment>
  );
};

// PLAIN INPUT WITHOUT FORMIK
export const InputPlain = props => {
  const {
    name,
    value,
    keyboardType,
    multiline,
    rightIcon,
    leftIcon,
    containerStyle,
    handleChange,
    errorMsg,
    containerStyles,
    inputContainerStyles,
    ...otherProps
  } = props;
  return (
    <React.Fragment>
      <Input
        name={name}
        value={value[name]}
        onChange={handleChange}
        placeholderTextColor="#7C7C7C"
        keyboardType={keyboardType}
        containerStyle={{...styles.container, ...containerStyles}}
        inputContainerStyle={{
          ...styles.inputContainer,
          ...inputContainerStyles,
        }}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        errorMessage={errorMsg}
        errorStyle={{color: 'red', marginTop: 0}}
        underlineColorAndroid="transparent"
        {...props}
        {...otherProps}
      />
    </React.Fragment>
  );
};
Pinput.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  keyboardType: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object,
  errorMsg: propTypes.string,
};
InputPlain.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  keyboardType: propTypes.string,
  errorMsg: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object,
};
