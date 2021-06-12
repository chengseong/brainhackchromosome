import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
//Import Components under this stack

import Component1 from '../components/component1.js'
import Component2 from '../components/component2.js'


const Stack = createStackNavigator()

function ComponentStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Component1" component = {Component1} options = {{
                headerTitle : "Component Page",
                headerLeft : () => (
                    <Entypo name="menu" size={24} color="black" onPress = {() => navigation.openDrawer()}/>
                )
            }}/>
            <Stack.Screen name = "Component2" component = {Component2}/>
        </Stack.Navigator>
    );
}

export default ComponentStack;