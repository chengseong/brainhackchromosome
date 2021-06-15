import * as React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StyleSheet, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


function registrationPage({navigation}) {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [emailAddress, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    
    function registerAccount() {
        if (password != password) {
            return 
        } else {
            
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.container}> 
                <View style = {{flex : 0.2, marginLeft: 20, marginRight:20, alignItems:'center'}}>
                    <Text style = {{fontSize: 40, color: '#5969FE', textAlign:'center', fontFamily: 'roboto-light'}}>Sign up with us</Text>    
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
                    <TextInput placeholder = "Confirm Password" style = {styles.inputFields} value = {confirmPassword} secureTextEntry = {true} onChangeText = {input => setConfirmPassword(input)}></TextInput>
                </View>
                <View>{password != confirmPassword && <Text style = {{color:"red"}}>Please ensure both passwords are the same</Text>}
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
                    <Button mode = "contained" style = {{backgroundColor: "#5464F8", borderRadius:25}} onPress = {() => registerAccount()}>Register </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Dimensions.get('screen').height * 0.13,
        justifyContent : 'center',
        alignItems : 'center',
    },
    inputFields : {
        flex:1,
        fontSize: 20
    },
    textContainer : {
        flex: 0.1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding:20,
        marginLeft:10,
        color:"#2329D6",
    }
});

export default registrationPage; 