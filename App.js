import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeStack from './routes/home.js';
import ComponentStack from './routes/component.js'
import loginStack from './routes/login.js';


const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
})


const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if (fontsLoaded) {
    return (
      <NavigationContainer> 
        <Tab.Navigator initialRouteName = "Home">
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="ComponentStack" component={ComponentStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn} 
      />
    )
  }
}
