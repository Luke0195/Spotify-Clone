import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FeedScreen from '../pages/Feed';
import SearchScreen from '../pages/Search'
import MusicsScreen from '../pages/Musics'
import PodcastScreen from '../pages/Podcast'


const Tabs = createBottomTabNavigator();


const Routes:React.FC = () =>{
return(
  <Tabs.Navigator
    tabBarOptions={{
      style:{
        backgroundColor:'#212121',
        paddingBottom:10,
        height:70
      },
      labelStyle:{
        fontSize: 13,
        fontFamily:'OpenSans-SemiBold'
      },

      activeTintColor:'#ffff',
      inactiveTintColor:'rgba(179, 179, 179, 0.5)'



    }}


  >
  <Tabs.Screen name="Feed" component={FeedScreen}/>
  <Tabs.Screen name="Search" component={SearchScreen}/>
  <Tabs.Screen name="Musics" component={MusicsScreen}/>
  <Tabs.Screen name="Podcasts" component={PodcastScreen}/>
</Tabs.Navigator>

)

}

export default Routes;
