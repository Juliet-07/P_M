import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../../../../screens/App/Bookings/DetailsScreen/index';

const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
};
export default Index;
