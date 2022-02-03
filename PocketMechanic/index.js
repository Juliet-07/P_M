/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {name as appName} from './app.json';
import Route from './src/config/Route/index'

const theme = {
  colors: {
    black: '#1E1E1E',
    primary: '#03396c',
    secondary: '#21AFFF',
    gray: '7C7C7C',
    success: '#28A745',
    error: '#F44545',
    warning: '#FF6600',
  },
};
const App = () => (
  <ThemeProvider theme={theme}>
    <Route />
  </ThemeProvider>
);
AppRegistry.registerComponent(appName, () => App);
