import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import HomeStack from './routes/home.js';
import ComponentStack from './routes/component.js'
import loginStack from './routes/login.js';

import Login from './components/loginPage.js'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer> 
        <Drawer.Navigator initialRouteName = "loginStack">
          <Drawer.Screen name = "HomeStack" component = {loginStack}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
