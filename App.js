import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Registration from './screens/registration';
import Header from './components/Header';
const Stack = createStackNavigator();

// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => {
              return <Header name="Kiddo's Strength Up" />;
            },
            headerStyle: {
              backgroundColor: '#40bf00',
              heigth: 120,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              shadowColor: '#000',
              elevation: 30,
            },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => {
              return <Header name="Kiddo's Strength Up"/>;
            },
             headerStyle: {
              backgroundColor: '#40bf00',
              heigth: 120,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              shadowColor: '#000',
              elevation: 30,
            },
          }}
        />*/}
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{
            headerTitle: () => {
              return <Header name="Kiddo's Strength Up"/>;
            },
             headerStyle: {
              backgroundColor: '#40bf00',
              heigth: 120,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              shadowColor: '#000',
              elevation: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}