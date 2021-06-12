import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Home1({navigation}) {
    function goToHome2() {
        navigation.navigate("Home2");
    }

    return (
        <View style = {styles.container}> 
            <Text>Home 1</Text>
            <Button title = "Home2" onPress = {() => goToHome2()}></Button> 
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

export default Home1;