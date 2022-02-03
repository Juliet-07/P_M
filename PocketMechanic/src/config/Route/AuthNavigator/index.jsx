import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/native-stack';
import Signup from '../../../screens/Auth/SignUp';
const {Navigator, Screen} = createStackNavigator();

const index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default index;
