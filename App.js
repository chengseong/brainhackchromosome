import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeStack from './routes/home.js';
import ComponentStack from './routes/component.js'

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
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'ComponentStack') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'gray',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#0009ff',
        }}
      >
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
