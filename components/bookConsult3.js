import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

function bookConsult3({navigation}) {
    return (
        <ScrollView style = {{flexGrow: 1, backgroundColor:'white'}}>
            <View style = {styles.container}> 
                <View style = {styles.header}><Text style = {styles.headerText}>
                    Your appointment has been booked!
                    </Text> 
                </View>
                <View style = {{flex:0.2, marginLeft:30, marginTop:30}}> 
                    <Text style = {{fontSize:24, fontFamily: 'roboto-bold'}}>Appointment Details</Text>
                    <View style = {{flex:1, marginTop:5}}>
                        <Text style = {styles.subHeaderText}>Date</Text>
                        <Text style = {styles.detailsText}>Thursday, 22 May 2021</Text>
                    </View>
                    <View style = {{flex:1, marginTop:5}}>
                        <Text style = {styles.subHeaderText}>Time</Text>
                        <Text style = {styles.detailsText}>2.30pm - 3.00pm</Text>
                    </View>
                </View>
                <View style = {{flex:0.2, marginTop:50, marginLeft:30}}> 
                    <Text style = {{fontSize:24, fontFamily: 'roboto-bold'}}>ABC Clinic </Text>
                </View>
                <View style = {{flex:0.2, marginLeft:30}}> 
                    <Text style = {styles.subHeaderText}>Address</Text> 
                    <Text style = {styles.detailsText}>123Address</Text>
                    <View style = {{flex:0.5}}>
                    <MapView style={styles.map} region={{
                        latitude: 1.3214,
                        longitude: 103.8458,
                        latitudeDelta: 0.0032,
                        longitudeDelta: 0.0032,
                        }}/> 
                    </View>
                </View>      
                <View style = {{flex:0.2, marginLeft: 30, marginTop: 10}}> 
                    <View style = {{flex:0, marginTop:5, }}>
                        <Text style = {styles.subHeaderText}>Email</Text> 
                        <Text style = {styles.detailsText}>123@gmail.com</Text>
                    </View>
                    <View style = {{flex:0, marginTop:10}}>
                        <Text style = {styles.subHeaderText}>Phone</Text> 
                        <Text style = {styles.detailsText}>88888888</Text>
                    </View>
                    <Text style = {{marginVertical:20, fontFamily:'roboto-regular'}}>You will be reminded 15 minutes before your consultation.</Text>
                </View>      
            </View>
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Dimensions.get('screen').height * 0.1,
    },
    header : {
        flex:0.20,
        marginLeft:30,
        marginRight:30,
    },
    headerText : {
        fontSize: 32,
        fontFamily: 'roboto-bold'
    },
    subHeaderText : {
        fontFamily:'roboto-light',
        fontSize:16,
        marginTop: 10,
        marginBottom: 5,
    },
    detailsText:{
        fontFamily: 'roboto-regular',
        fontSize: 16,  
    },
    map : {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.2,
        borderRadius: 15,
        marginTop: 10
    },
});

export default bookConsult3;