import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons'; 
import {Button} from 'react-native-paper';
import MapView from 'react-native-maps';

function bookConsult1({navigation}) {
    //To pull from backend
    const [clinicArr, setClinicArr] = React.useState([
        {name: "Clinic 1", address : "TestAddress1", email : "123@gmail.com", phoneNumber:"88888888", lat: 1.3214 , lon: 103.8458},
        {name: "Clinic 2", address : "TestAddress2", email : "456@gmail.com", phoneNumber:"77777777", lat: 1.3338 , lon: 103.7453},
        {name: "Clinic 3", address : "TestAddress3", email : "789@gmail.com", phoneNumber:"66666666", lat: 1.3402 , lon: 103.9496},
    ])
    const [selectedClinic, setSelectedClinic] = React.useState(clinicArr[0])


    return (
        <View style = {styles.container}>
            <View style = {styles.header}><Text style = {styles.headerText}>Book a Consultation</Text></View>
            <View style = {styles.selectClinicContainer}>
                <Text style = {styles.subHeaderText}>Select a Clinic</Text>
                <Picker 
                    mode = "dropdown"
                    selectedValue = {selectedClinic}
                    onValueChange = {(clinic) => {setSelectedClinic(clinic)}}
                    >
                    {clinicArr.map(item => (
                      <Picker.Item label = {item.name} value = {item}/>  
                    ))}
                    </Picker>
            </View>
            <View style = {{flex:0.5, marginLeft: 30}}> 
                <Text style = {styles.subHeaderText}>Clinic Details</Text>
                <Text style = {styles.subsubHeaderText}>Address: {selectedClinic.address}</Text>
                <View stlye = {{flex:0.5}}>
                <MapView style={styles.map} region={{
                    latitude: selectedClinic.lat,
                    longitude: selectedClinic.lon,
                    latitudeDelta: 0.0032,
                    longitudeDelta: 0.0032,
                    }}/> 
                </View>
            </View>
            <View style = {{flex:0.25, marginLeft: 30}}>
                <Text style = {styles.subsubHeaderText} >Contact Details:</Text>
                <View style = {{flex:0, flexDirection:'row'}}>
                    <AntDesign name="mail" size={24} color="#5464F8" style = {styles.icon}/>
                    <Text style = {{marginLeft: 10}}>{selectedClinic.email}</Text>
                </View>
                <View style = {{flex:0, flexDirection:'row', marginTop:10}}>
                    <AntDesign name="phone" size={24} color="#5464F8" style = {styles.icon}/>
                    <Text style = {{marginLeft: 10}}>{selectedClinic.phoneNumber}</Text>
                </View>
            </View>
            <View style = {{flex:0.1,justifyContent:"center", alignItems:"center" }}>
                <Button mode = "contained" style = {{backgroundColor: "#5464F8", width:"30%"}} onPress = {() => navigation.navigate("bookConsult2")}>Next</Button>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        flex:0.1,
        marginTop:30,
        alignItems:"center"
    },
    selectClinicContainer : {
        flex : 0.15,
        width:"80%",
        marginLeft:30,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize:20,
        fontWeight: 'bold'
    },
    subsubHeaderText : {
        fontSize:16,
        marginBottom: 10
    },
    icon: {
        color:"#2329D6",
        padding:0
    },
    map : {
        width: "90%",
        height: "80%"
    }
});

export default bookConsult1;