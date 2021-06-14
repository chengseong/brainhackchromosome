import * as React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function registrationPage({navigation}) {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [emailAddress, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    
    function registerAccount() {
        console.log("Register")
    }

    return (
            <View style = {styles.container}> 
                <View style = {{flex : 0.3, marginTop: 40, marginLeft: 20, marginRight:20, alignItems:'center'}}>
                    <Text style = {{fontSize: 40, color: '#5969FE', textAlign:'center'}}>Sign up with us</Text>    
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="user" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Username" style = {styles.inputFields} value = {userName} onChangeText = {input => setUserName(input)}></TextInput>
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="lock" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Enter Password" style = {styles.inputFields} value = {password} onChangeText = {input => setPassword(input)}></TextInput>
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="lock" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Confirm Password" style = {styles.inputFields} value = {confirmPassword} onChangeText = {input => setConfirmPassword(input)}></TextInput>
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="mail" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Email" style = {styles.inputFields} value = {emailAddress} onChangeText = {input => setEmail(input)}></TextInput>
                </View>
                <View style = {styles.textContainer}>
                    <AntDesign name="phone" size={32} color="#5464F8" style = {styles.icon}/>
                    <TextInput placeholder = "Phone Number" style = {styles.inputFields} value = {phoneNumber} onChangeText = {input => setPhoneNumber(input)}></TextInput>
                </View>
                <View style = {{flex:0.3, justifyContent:"center"}}>
                    <Button mode = "contained" style = {{backgroundColor: "#5464F8"}} onPress = {() => registerAccount()}>Register </Button>
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
        fontSize: 20
    },
    textContainer : {
        flex: 0.13, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0,
        marginBottom:0,
    },
    icon: {
        padding:20,
        marginLeft:10,
        color:"#2329D6"
    }
});

export default registrationPage; 