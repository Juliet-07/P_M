import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../../screens/Auth/Intro';
import Signup from '../../../screens/Auth/SignUp';
import Signin from '../../../screens/Auth/SignIn';
const {Navigator, Screen} = createNativeStackNavigator();

const index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};
export default index;
