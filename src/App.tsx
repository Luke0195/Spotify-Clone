import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {  View,StatusBar } from 'react-native'
import Routes from './routes/index'
const App:React.FC = () =>{
  return(
    <NavigationContainer>
    <StatusBar  backgroundColor="#030404"  barStyle="light-content" translucent/>
    <View style={{flex: 1, backgroundColor:'#030304'}}>
     <Routes/>
    </View>

    </NavigationContainer>

  )
}

export default App;
