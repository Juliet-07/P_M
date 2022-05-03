import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMap from '../../../../screens/App/Home/index';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="HomeMap" component={HomeMap} />
    </Navigator>
  );
};
export default Index;
