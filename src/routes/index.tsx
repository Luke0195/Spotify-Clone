import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FoundationIcons from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';


import HomeScreen from '../pages/Feed';
import SearchScreen from '../pages/Search';
import LibaryScreen from '../pages/Musics';
import PremiumScreen from '../pages/Premium';


const Tabs = createBottomTabNavigator();


const Routes:React.FC = () =>{
return(
  <Tabs.Navigator
    tabBarOptions={{
      style:{
        backgroundColor:'#212121',
        paddingBottom:8,
        height:75,
        borderTopWidth: 1,
        borderTopColor:'#030404'


      },
      labelStyle:{
        fontSize:14,
        lineHeight:24,
        fontFamily:'GothamBook',
        textAlign:'center'
      },
      activeTintColor:'#ffff',
      inactiveTintColor:'rgba(179, 179, 179, 0.3)'
    }}
      initialRouteName="HomeScreen"
  >
  <Tabs.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon:({color, size}) =>(
      <FoundationIcons name="home" size={size} color={color}/>
    )
  }}

  />
  <Tabs.Screen
   name="Search"
   component={SearchScreen}
   options={{
    tabBarIcon:({color, size}) =>(
      <Feather name="search" size={size} color={color}/>
    )
  }}

   />
  <Tabs.Screen
    name="YourLibary"
    component={LibaryScreen}
    options={{
    tabBarIcon:({color, size}) =>(
      <MaterialIcons name="bookshelf" size={size} color={color}/>
    ),
  }}
  />

  <Tabs.Screen
     name="Premium"
     component={PremiumScreen}
     options={{
     tabBarIcon:({color, size}) =>(
        <EntypoIcons name="spotify-with-circle" size={size} color={color}/>
      ),

    }}

    />
</Tabs.Navigator>

)

}

export default Routes;
