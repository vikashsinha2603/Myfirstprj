import * as React from 'react';
import { View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigation from './src/constants/TabNavigation';
import State_Props from './src/State_Props';

// import Bla from './src/Navigation/Bla';



const App =()=>{
  return(
   <SafeAreaView>
    <State_Props name="vikash-sinha" branch ="computer science" />
   </SafeAreaView>
  )
}

export default App;






