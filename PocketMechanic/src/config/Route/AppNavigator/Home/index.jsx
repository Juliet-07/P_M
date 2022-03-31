import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../../screens/App/Home';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
export default Index;
