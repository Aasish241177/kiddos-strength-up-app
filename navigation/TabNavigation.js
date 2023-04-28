import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Diet from '../screens/diet'
import Workout from '../screens/workout'
import LifeStyle from '../screens/lifeStyle'
import DietStack from "./dietStackNavigator"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = ()=>{
  return(
<Tab.Navigator   screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                     if (route.name === 'Diet') {
                        iconName = focused
                            ? 'nutrition'
                            : 'nutrition-outline';
                     }
                            else if(route.name === 'LifeStyle'){
                              iconName = focused
                              ?'flowe'
                              :'flower-outline'
                            }
                              else if(route.name === 'Workout'){
                                iconName = focused
                                ?'barbell'
                                :'barbell-outline'
                              }
                              return <Ionicons name={iconName} size={size} color={color} />
                }})} 
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
                     >
                     <Tab.Screen name ='Diet' component ={DietStack}/>
                     <Tab.Screen name ='Workout' component ={Workout}/>
                     <Tab.Screen name ='LifeStyle' component ={LifeStyle}/>
                    

                        </Tab.Navigator>
  )
}

export default BottomTabNavigator
