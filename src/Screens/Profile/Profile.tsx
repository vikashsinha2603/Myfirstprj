import { View, Text,Button } from 'react-native'
import React from 'react'

import styles from './styles'

import navigationString from '../../constants/navigationString';

export default function Profile( {navigation}:{navigation:any}) {

  // const {name, count} = props.route.params
  // const {title} = route.params
  const gotoScreen=()=>{
    navigation.navigate(navigationString.EXPLORE)
  

  }
 
  return (
    <View style = {styles.container} >
      <Text style = {{fontSize: 30}}>profile Screen</Text>
      {/* <Text>name : {name}  </Text> */}
      
      <Button onPress={gotoScreen} title='go to explore' />

    </View>
  );
}



// {navigation, route}: {navigation:any, route:any}------in the page function 