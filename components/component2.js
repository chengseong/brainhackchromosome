import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Component2( {navigation}) {
    return (
        <View style = {styles.container}> 
            <Text>Component 2</Text>
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

export default Component2;