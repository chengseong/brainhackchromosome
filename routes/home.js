import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/home.js'

const Stack = createStackNavigator()

export default function HomeStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} />
        </Stack.Navigator>
    );
};