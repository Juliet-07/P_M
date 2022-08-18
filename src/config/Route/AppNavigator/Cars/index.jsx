import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cars from '../../../../screens/App/Cars';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Cars" component={Cars} />
    </Navigator>
  );
};
export default Index;
