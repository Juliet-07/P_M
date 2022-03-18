import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {colors} from '../../Colors/index';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import Cars from './Cars';

const {Navigator, Tab} = createMaterialBottomTabNavigator();

const Index = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          header: 'null',
          headerShown: false,
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size + 7} />
          ),
        }}
      />
      <Screen
        name="Cars"
        component={Cars}
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Cars',
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="car" color={color} size={size + 7} />
          ),
        }}
      />
    </Navigator>
  );
};
export default Index;
