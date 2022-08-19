import React, {useReducer, useEffect, useMemo} from 'react';
import Loader from '../../components/Loader';
import ShowMessage, {type} from '../../components/ShowMessage';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator/index';
import {AuthContext} from '../../context/index';
import AsyncStorage from '@react-native-community/async-storage';

const index = () => {
  const token = false;
  const initialState = {
    isLoading: true,
    userEmail: null,
    userToken: null,
    verification: false,
  };
  //   CREATE AUTHREDUCER
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
          userEmail: action.id,
        };
      case 'SIGNUP':
        return {
          ...prevState,
          isLoading: false,
          verification: action.email,
        };
      case 'VERIFICATION':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case 'SIGNOUT':
        return {
          ...prevState,
          isLoading: false,
          userToken: false,
          userEmail: null,
        };
    }
  };
  //   SET UP USEREDUCER
  const [authState, dispatch] = useReducer(authReducer, initialState);

  //   SET UP USEMEMO (to change state properly based on the action). Details in if condition will be fetched from database
  const authContext = useMemo(
    () => ({
      signIn: async token => {
        try {
          await AsyncStorage.setItem('token', token);
        } catch (e) {
          ShowMessage(type.ERROR, e.toString());
        }
        dispatch({type: 'LOGIN', token});
      },
      signUp: async email => {
        try {
          await AsyncStorage.setItem('verify', email);
          console.log(email, 'SIGNUP');
        } catch (e) {
          ShowMessage(type.ERROR, e.toString());
        }
        dispatch({type: 'SIGNUP', email});
      },
      verification: async token => {
        try {
          await AsyncStorage.setItem('token', token);
          console.log(token, 'verification');
        } catch (e) {
          ShowMessage(type.ERROR, 'There was error');
        }
        dispatch({type: 'VERIFICATION', token});
      },
      signOut: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          ShowMessage(type.ERROR, 'There was error');
        }
        dispatch({type: 'SIGNOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('token');
        console.log(userToken);
      } catch (e) {
        ShowMessage(type.ERROR, 'There was error');
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);
  if (authState.isLoading) {
    return <Loader />;
  }
  console.log(authState.userToken, 'checking token');
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
    // <AuthContext.Provider value={authContext}>
    //   <NavigationContainer>
    //     {authState.userToken ? <AppNavigator /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
};
export default index;
