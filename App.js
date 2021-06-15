import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CalendarStack from './routes/calenderStack.js'
import HomeStack from './routes/home.js';
import loginStack from './routes/login.js';
import { createStackNavigator } from '@react-navigation/stack';
import { loginContext } from './shared/loginContext.js';
import { userIDContext } from './shared/userContext.js';


const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
})


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [userID, setUserID] = useState('')
  
  if (fontsLoaded) {
    if (loggedIn) {
      return (
      <userIDContext.Provider value = {userID}>
        <NavigationContainer> 
          <Tab.Navigator initialRouteName = "Home" screenOptions = {({route}) => ({
              tabBarIcon : ({focused, size, color}) => {
                let iconName;
                if (route.name === 'Calendar') {
                  iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                } else {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                return <Ionicons  icon = {iconName} size = {size} color = {color}/>;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#5464F8',
              inactiveTintColor: 'gray',
            }}
            >
            <Tab.Screen name = "Calendar" component = {CalendarStack} />
            <Tab.Screen name="Home" component={HomeStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </userIDContext.Provider>
      )
    } else {
      return (
        <loginContext.Provider value = {{setLoggedIn, setUserID}}>
        <NavigationContainer> 
          <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "login" component = {loginStack} />
          </Stack.Navigator>
        </NavigationContainer>
        </loginContext.Provider>
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
