import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

function Cars() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>THIS IS THE CAR SCREEN</Text>
    </View>
  );
}
const Index = () => {
  return (
    <Navigator>
      <Screen name="Cars" component={Cars} />
    </Navigator>
  );
};
export default Index;
