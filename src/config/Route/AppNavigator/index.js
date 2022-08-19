import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../Colors/index';
import SplashScreen from 'react-native-splash-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import CarScreen from './Cars';
import Bookings from './Bookings';
import SettingScreen from './Settings';
const Tab = createBottomTabNavigator();

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size + 7} />
          ),
        }}
      />
      <Tab.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          tabBarLabel: 'Cars',
          headerShown: false,
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <Fontisto name="car" color={color} size={size + 7} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          headerShown: false,
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <Entypo name="bookmark" color={color} size={size + 8} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          headerShown: false,
          activeColor: colors.primaryBlue,
          inactiveColor: colors.gray,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings-sharp" color={color} size={size + 7} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Index;
