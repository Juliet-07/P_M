import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../../../screens/App/Settings';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
export default Index;
