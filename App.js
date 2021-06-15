import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,  } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CalendarStack from './routes/calenderStack.js'
import HomeStack from './routes/home.js';
import loginStack from './routes/login.js';
import { createStackNavigator } from '@react-navigation/stack';


const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
})


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true)
  
  if (fontsLoaded) {
    if (loggedIn) {
      return (
      <NavigationContainer> 

        <Tab.Navigator
        initialRouteName = "Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:'white',
          inactiveTintColor:'gray',
          activeBackgroundColor: '#5464F8',
          tabStyle: {borderRadius:30, width:50}
        }}
      >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name = "Calendar" component = {CalendarStack} />
        </Tab.Navigator>
      </NavigationContainer>
      )
    } else {
      return (
        <NavigationContainer> 
          <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "login" component = {loginStack} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
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
