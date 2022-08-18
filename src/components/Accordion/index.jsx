import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';
import {styles} from './styles';
import {colors} from '../../config/Colors/index';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Accordion = ({title, placeholder, props}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#1A0FAA'}]}>
          {title}
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        data={data}
        title={title}
        placeholder={placeholder}
        search
        searchPlaceholder="Search"
        value={value}
        labelField="label"
        valueField="value"
        maxHeight={300}
        style={[styles.dropdown, isFocus && {borderColor: '#1A0FAA'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        onFocus={() => setIsFocus(true)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? '#1A0FAA' : 'black'}
            name="Safety"
            size={20}
          />
        )}
        {...props}
      />
    </View>
  );
};

export default Accordion;
