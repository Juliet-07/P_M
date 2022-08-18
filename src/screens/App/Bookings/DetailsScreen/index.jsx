import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {colors} from '../../../../config/Colors/index';
import {InputPlain} from '../../../../components/Input/index';
import Accordion from '../../../../components/Accordion/index';
import {styles} from './styles';

const Details = () => {
  const [values, setValues] = useState('');
  const [text, onChangeText] = useState('Description');
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
        <Accordion
          title={'Service Category'}
          placeholder="What do you need help with?"
        />
        <Accordion title={'Service Type'} placeholder="Brake Repair" />
        <Accordion
          title={'Vehicle type'}
          placeholder="Choose the model of your car here"
        />
      </View>
      {/* text box */}
      <SafeAreaView style={{backgroundColor: 'red'}}>
        <TextInput value={text} onChangeText={onChangeText} />
      </SafeAreaView>
    </View>
  );
};
export default Details;
