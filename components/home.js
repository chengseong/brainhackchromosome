import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function HomePage({navigation}) {
    return (
        <View style = {styles.container}> 
            <Text>Home Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

export default HomePage;