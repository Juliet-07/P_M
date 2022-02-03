import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

const index = () =>{
    return(
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    )
}
export default index