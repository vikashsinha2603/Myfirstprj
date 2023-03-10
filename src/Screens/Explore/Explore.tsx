import { View, Text, Button } from 'react-native'
import React from 'react'

import styles from './styles'
import navigationString from '../../constants/navigationString'

export default function Explore({navigation}:{navigation:any}) {
  const gotoScreen = () =>{
    navigation.navigate(navigationString.HOME)
  }
  return (
    <View style = {styles.container} >
      <Text style = {{fontSize: 30}}>explore Screen</Text>
      <Button onPress={gotoScreen} title='go to home' />
    </View>
  );
}