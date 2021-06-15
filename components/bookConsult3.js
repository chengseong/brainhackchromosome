import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

function bookConsult3() {
    return (
        <ScrollView style = {{flexGrow: 1}}>
            <View style = {styles.container}> 
                <View style = {styles.header}><Text style = {styles.headerText}>
                    Your appointment has been booked!
                    </Text> 
                </View>
                <View style = {{flex:0.2, marginTop:10, marginLeft:30}}> 
                    <Text style = {styles.subHeaderText}>Clinic: ABC Clinic </Text>
                </View>
                <View style = {{flex:0.2, marginLeft:30}}> 
                    <Text>Address: 123Address</Text> 
                    <View style = {{flex:0.5}}>
                    <MapView style={styles.map} region={{
                        latitude: 1.3214,
                        longitude: 103.8458,
                        latitudeDelta: 0.0032,
                        longitudeDelta: 0.0032,
                        }}/> 
                    </View>
                </View>      
                <View style = {{flex:0.2, marginLeft:30, marginTop:10}}> 
                    <Text style = {{fontSize:16, fontWeight: 'bold'}}> Appointment Details</Text>
                    <View style = {{flex:1, flexDirection: 'row', marginTop:5, alignItems:'center'}}>
                        <Ionicons name="calendar-sharp" size={24} color="#5464F8" style = {{padding:5}}/>
                        <Text>Thursday, 22 May 2021</Text>
                    </View>
                    <View style = {{flex:1, flexDirection: 'row', marginTop:5, alignItems: 'center'}}>
                        <Ionicons name="time-outline" size={24} color="#5464F8" style = {{padding:5}}/>
                        <Text>2.30pm - 3.00pm </Text>
                    </View>
                </View>
                <View style = {{flex:0.2, marginLeft: 30, marginTop: 10}}> 
                    <Text style = {{fontSize: 16, fontWeight: 'bold'}}>Clinic Contact</Text>
                    <View style = {{flex:0, flexDirection:'row', marginTop:5, alignItems: 'center'}}>
                        <AntDesign name="mail" size={24} color="#5464F8" style = {{padding:5}}/>
                        <Text style = {{marginLeft: 10}}>123@gmail.com</Text>
                    </View>
                    <View style = {{flex:0, flexDirection:'row', marginTop:10, alignItems: 'center'}}>
                        <AntDesign name="phone" size={24} color="#5464F8" style = {{padding:5}}/>
                        <Text style = {{marginLeft: 10}}>88888888</Text>
                    </View>
                    <Text style = {{marginTop:20}}>You will be reminded 15 minutes before your consultation.</Text>
                </View>      
            </View>
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header : {
        flex:0.20,
        marginTop:30,
        marginLeft:30,
    },
    headerText : {
        fontSize: 32,
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize:20,
        fontWeight: 'bold'
    },
    map : {
        width: "90%",
        height: 200
    }
});

export default bookConsult3;