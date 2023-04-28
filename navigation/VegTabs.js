import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VegBreakFast from "../screens/VegBreakeFast"
import VegLunch from "../screens/VegLunch"
import VegSnacks from "../screens/VegSnacks"
import VegDinner from "../screens/VegDinner"

const Tab = createMaterialTopTabNavigator()

const VegTabs = ()=>{
  return(
<Tab.Navigator   
            
                     >
                     <Tab.Screen name ='BreakFast' component ={VegBreakFast}/>
                     <Tab.Screen name ='Lunch' component ={VegLunch}/>
                     <Tab.Screen name ='Snacks' component ={VegSnacks}/>
                    <Tab.Screen name ='Dinner' component ={VegDinner}/>
                    

                        </Tab.Navigator>
  )
}

export default VegTabs