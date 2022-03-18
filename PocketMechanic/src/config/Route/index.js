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
  const authContext = useMemo(() => ({
    signIn: (userEmail, password) => {
      let userToken;
      userEmail = null;
      if (userEmail === 'email' && password === 'pass') {
        userToken = 'recognizedUser';
      }
      dispatch({type: 'LOGIN', id: userEmail, token: userToken});
    },
    signOut: () => {
      dispatch({type:'SIGNOUT'})
    },
    signUp: () => {
      setuserToken('signed-up');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (authState.isLoading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default index;
