import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NonVegBreakFast from '../screens/non-VegBreakfast'
import NonVegLunch from '../screens/non-VegSnacks'
import NonVegSnacks from '../screens/non-VegSnacks'
import NonVegDinner from '../screens/non-VegDinner'

const Tab = createMaterialTopTabNavigator()

const NonVegTabs = ()=>{
  return(
<Tab.Navigator   
            
                     >
                     <Tab.Screen name ='BreakFast' component ={NonVegBreakFast}/>
                     <Tab.Screen name ='Lunch' component ={NonVegLunch}/>
                     <Tab.Screen name ='Snacks' component ={NonVegSnacks}/>
                    <Tab.Screen name ='Dinner' component ={NonVegDinner}/>
                    

                        </Tab.Navigator>
  )
}

export default NonVegTabs