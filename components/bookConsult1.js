import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import Button from '../shared/button';


function bookConsult1({navigation}) {
    //To pull from backend
    const [clinicArr, setClinicArr] = React.useState([
        {name: "Clinic 1", address : "TestAddress1", email : "123@gmail.com", phoneNumber:"88888888", lat: 1.3214 , lon: 103.8458},
        {name: "Clinic 2", address : "TestAddress2", email : "456@gmail.com", phoneNumber:"77777777", lat: 1.3338 , lon: 103.7453},
        {name: "Clinic 3", address : "TestAddress3", email : "789@gmail.com", phoneNumber:"66666666", lat: 1.3402 , lon: 103.9496},
    ])
    const [selectedClinic, setSelectedClinic] = React.useState(clinicArr[0])


    return (
        <ScrollView backgroundColor='white' style = {{flexGrow:1}}>
            <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Book a Consultation</Text>
            </View>
                <View style = {styles.selectClinicContainer}>
                    <Text style = {styles.subHeaderText}>Select a Clinic</Text>
                    <View marginVertical={10}>
                        <Picker
                            selectedValue = {selectedClinic}
                            onValueChange = {(clinic) => {setSelectedClinic(clinic)}}
                            >
                            {clinicArr.map(item => (
                            <Picker.Item label = {item.name} value = {item}/>  
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style = {{flex:1, marginLeft: 30, marginTop: 30}}> 
                    <Text style = {styles.subHeaderText}>Clinic Details</Text>
                    <View
                    marginTop={10}>
                        <Text style = {styles.subsubHeaderText}>Address </Text>
                        <Text style = {styles.detailsText}>{selectedClinic.address}</Text>
                        <MapView style={styles.map} region={{
                            latitude: selectedClinic.lat,
                            longitude: selectedClinic.lon,
                            latitudeDelta: 0.0032,
                            longitudeDelta: 0.0032,
                            scrollEnabled: false,
                        }}/> 
                    </View>
                    <View style = {{flex: 0.25, marginTop: 20}}>
                        <View style = {{flex:0, marginTop:5}}>
                            <Text style = {styles.subsubHeaderText}>Email </Text>
                            <Text style = {styles.detailsText}>{selectedClinic.email}</Text>
                        </View>
                        <View style = {{flex:0, marginTop:10}}>
                            <Text style = {styles.subsubHeaderText}>Phone </Text>
                            <Text style = {styles.detailsText}>{selectedClinic.phoneNumber}</Text>
                        </View>
                    </View>
                </View>
                <View style = {{flex:0.1,justifyContent:"center", alignItems:"center", marginTop:40 }}>
                    <Button
                        onPress={() => navigation.navigate("bookConsult2")}
                        text='Next'/>
                </View>
            </View>
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    container: {
        paddingTop: Dimensions.get('screen').height * 0.1,
        flex: 1,
        backgroundColor: 'white',
    },
    header : {
        flex:0.1,
        marginLeft:30,
    },
    selectClinicContainer : {
        paddingTop: 20,
        flex : 0.5,
        width:"80%",
        marginLeft:30,
    },
    headerText: {
        fontSize: 32,
        fontFamily:'roboto-bold'
    },
    subHeaderText: {
        fontSize:25,
        fontFamily:'roboto-bold'
    },
    subsubHeaderText : {
        fontFamily:'roboto-light',
        fontSize:16,
        marginTop: 10,
        marginBottom: 5,
    },
    detailsText:{
        fontFamily: 'roboto-regular',
        fontSize: 16,  
    },
    icon: {
        color:"#2329D6",
        padding:0
    },
    map : {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.2,
        borderRadius: 15,
        marginTop: 10
    },
});

export default bookConsult1;