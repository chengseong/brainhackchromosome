import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeStack from './routes/home.js';
import ComponentStack from './routes/component.js'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="ComponentStack" component={ComponentStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
