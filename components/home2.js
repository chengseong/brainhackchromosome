import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Home2({navigation}) {
    return (
        <View style = {styles.container}> 
            <Text>Home 2</Text>
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

export default Home2;