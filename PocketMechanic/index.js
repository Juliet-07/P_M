/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {name as appName} from './app.json';
import Route from './src/config/Route/index';
import Accordion from './src/components/Accordion/index';
import OnboardingScreen from './src/screens/Auth/Onboarding/index';

const theme = {
  colors: {
    default: '#000000',
    primaryBlue: '#1A0FAA',
    secondaryBlue: '#0B04FF',
    buttonBlue: '#166FFF',
    buttonYellow: '#FFBE1E',
    gray: '#7C7C7C',
    success: '#5CAA0F',
    error: '#FF0404',
    warning: '#FF6600',
  },
};
const App = () => (
  <ThemeProvider theme={theme}>
    <OnboardingScreen />
  </ThemeProvider>
);
AppRegistry.registerComponent(appName, () => App);
