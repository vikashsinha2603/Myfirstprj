import { View, Text, Button, } from 'react-native'
import React from 'react'

import navigationString from '../../constants/navigationString'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Home=({navigation}:{navigation:any})=> {
 

  const gotoScreen=()=>{
    navigation.navigate(navigationString.PROFILE, {name:"vikash", count: 10})

  }
 
  
  return (
    <View style = {styles.container} >
        
<Button onPress={gotoScreen} title='go to profile' />

<Text style ={{fontSize: 20, fontWeight: "bold" }}> welcome to the home page</Text>

    </View>
  );
}

export default Home




