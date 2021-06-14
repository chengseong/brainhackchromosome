import * as React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function loginPage({navigation}) {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    function goToRegistration() {
        navigation.navigate("registrationPage")
    }

    return (
            <View style = {styles.container}> 
                <View style = {{flex : 0.8, marginTop: 80, marginLeft: 20, marginRight:20, alignItems:'center'}}>
                    <Text style = {{fontSize: 40, color: '#5969FE', textAlign:'center'}}>Welcome to Tele Consult</Text>    
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="user" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Username" style = {styles.inputFields} value = {userName} onChangeText = {input => setUserName(input)}></TextInput>
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="lock" size={32} color = "#5464F8" style = {styles.icon}/>    
                    <TextInput placeholder = "Password" style = {styles.inputFields} value = {password} secureTextEntry = {true} onChangeText = {input => setPassword(input)}></TextInput>
                </View>
                <View style = {{flex: 0.5, alignItens:'center', marginTop : 60}}>
                    <Button mode = "contained" onPress = {() => console.log(userName, password)} style = {{marginTop:50, backgroundColor:"#5464F8"}}>Login</Button>
                </View>
                <View style = {{flex: 0.5, alignItens:'center'}}>
                    <Text>Don't have an account yet? Sign up <Text onPress = {() => goToRegistration()} style = {{color: 'blue'}}>here</Text>.</Text>
                </View>
            </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    inputFields : {
        marginTop:10,
        flex:1,
        fontSize: 20,
        width:"80%"
    },
    textContainer : {
        flex: 0.25, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding:20,
        marginLeft:10
    }
});

export default loginPage; 