// import { View, Text } from 'react-native'
// import React from 'react'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import navigationString from './navigationString';
// import { NavigationContainer } from '@react-navigation/native';
// import { Home, Profile } from '../Screens';

// const Tab = createBottomTabNavigator();

// const tabNavigation = () => {
//   return (
//     <Tab.Navigator>
//    <Tab.Screen name={navigationString.HOME} component={Home} />
//    <Tab.Screen name = {navigationString.PROFILE} component={Profile} />
//     </Tab.Navigator>

//   )
// }

// export default tabNavigator;

import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationString from './navigationString';
import {Explore, Home, Profile} from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={navigationString.HOME} component={Home}
        options={{
          tabBarIcon: () => <Icon name ="home" size={28} /> 
        }}
        
        />
        <Tab.Screen name={navigationString.PROFILE} component ={Profile}
        options ={{
          tabBarIcon: () => <Icon name="search" size={28} />
        }} />

        <Tab.Screen name={navigationString.EXPLORE} component={Explore}
        options={{
          tabBarIcon:()=> <Icon name="explore" size={28} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
