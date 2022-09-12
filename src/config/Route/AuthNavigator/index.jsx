import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../../../screens/Auth/Onboarding/index';
import Splash from '../../../screens/Auth/Intro';
import Signup from '../../../screens/Auth/SignUp';
import Signin from '../../../screens/Auth/SignIn';
import Verification from '../../../screens/Auth/Verification';
import Forgot from '../../../screens/Auth/PasswordReset/forgotPassword';
import Change from '../../../screens/Auth/PasswordReset/changePassword';
const {Navigator, Screen} = createNativeStackNavigator();

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Splash" component={Splash} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Verification" component={Verification} />
      <Screen name="Forgot" component={Forgot} />
      <Screen name="Change" component={Change} />
    </Navigator>
  );
};
export default Index;
