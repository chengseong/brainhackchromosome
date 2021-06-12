import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './components/home.js';
import Component2 from './components/component2.js'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Component2" component={Component2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
