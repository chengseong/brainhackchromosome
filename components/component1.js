import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Component1({navigation}) {
    function goToComponent2() {
        navigation.navigate("Home2");
    }

    return (
        <View style = {styles.container}> 
            <Text>Component 1</Text>
            <Button title = "Component2" onPress = {() => goToComponent2()}></Button>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

export default Component1;