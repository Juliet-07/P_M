import React from 'react';
import {View, Text} from 'react-native';
import Accordion from '../../../components/Accordion';

const Index = () => {
  return (
    <View>
      <Text>THIS IS THE HOME SCREEN</Text>
      <View>
        <Accordion title={'PickUp Details'} />
        <Accordion Title={'Dropoff Details'} />
        <Accordion Title={'Seleted Categories'} />
      </View>
    </View>
  );
};
export default Index;
