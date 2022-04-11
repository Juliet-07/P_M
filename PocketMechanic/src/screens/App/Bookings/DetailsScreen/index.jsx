import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../../../config/Colors/index';
import {InputPlain} from '../../../../components/Input/index';
import Accordion from '../../../../components/Accordion/index';
import {styles} from './styles';

const Details = () => {
  const [values, setValues] = useState('');
  return (
    <View style={styles.container}>
      {/* Location filled from mapscreen */}
      <View style={styles.inputView}>
        <InputPlain
          name="Location"
          placeholder="Location"
          value={values}
          onChange={text => setValues(text)}
        />
      </View>
      {/* Section for request */}
      <View>
        <Accordion Title={'Vehicle Type'} />
        <Accordion Title={'Service Category'} />
      </View>
    </View>
  );
};
export default Details;
