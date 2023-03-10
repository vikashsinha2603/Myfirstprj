import { View, Text } from 'react-native'
import React from 'react'

const State_Props = ({name,branch}: {name:any, branch:any}) => {
  return (
    <View>
      <Text>State_Props</Text>
      <Text style ={{fontSize:20, backgroundColor:'red'}}>name :{name} </Text>
      <Text></Text>
      <Text style ={{fontSize:20, backgroundColor:'red'}}>My branch is :{branch} </Text>
    </View>
  )
}

export default State_Props