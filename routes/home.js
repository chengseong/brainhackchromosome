import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

//Import Components for this stack 
import Home1 from '../components/home1.js'
import Home2 from '../components/home2.js'



const Stack = createStackNavigator()

function HomeStack({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home1" component = {Home1} options = {{
                headerTitle : "Home Page",
                headerLeft : () => (
                    <Entypo name="menu" size={24} color="black" onPress = {() => navigation.openDrawer()}/>
                )
            }}/>
            <Stack.Screen name = "Home2" component = {Home2}/>
        </Stack.Navigator>
    );
};

export default HomeStack;