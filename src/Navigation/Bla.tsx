import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import {Home, Profile, Explore} from '../Screens';


const Stack = createNativeStackNavigator();

function Bla() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{headerShown: false}}>


        <Stack.Screen options={{title:'My Home'  }} name={navigationString.HOME} component={Home} />

        <Stack.Screen name={navigationString.PROFILE} component={Profile} />
        <Stack.Screen name={navigationString.EXPLORE} component={Explore} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Bla
