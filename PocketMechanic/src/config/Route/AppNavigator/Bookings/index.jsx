import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bookings from '../../../../screens/App/Bookings';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Bookings" component={Bookings} />
    </Navigator>
  );
};
export default Index;
