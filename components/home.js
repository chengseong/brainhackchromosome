import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard,} from 'react-native';
import {Button} from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Card from '../shared/card';

export default function Home({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => setModalVisible(true);

    const appointments = [
        {clinicName: 'ABC clinic', doctor: 'Dr Ang Koon Hian', date: '22nd May 2021', time: '10:30 - 11:00', key:'1'},
        {clinicName: 'ABC clinic', doctor: 'Dr Ang Koon Hian', date: '22nd May 2021', time: '10:30 - 11:00', key:'2'},
        {clinicName: 'ABC clinic', doctor: 'Dr Ang Koon Hian', date: '22nd May 2021', time: '10:30 - 11:00', key:'3'},
    ]

    const [toShow, setToShow] = useState({});

    const showItem = (item) => setToShow(item);

    return (
        <View style = {styles.container}> 
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>{toShow.clinicName}</Text>
                                <Text style={{...styles.modalDescription, ...styles.modalDoctor}}>{toShow.doctor}</Text>
                                <Text style={styles.modalDescription}>{toShow.date}</Text>
                                <Text style={styles.modalDescription}>{toShow.time}</Text>
                                <MapView 
                                    style={styles.mapView}
                                    initialRegion={{
                                        latitude:1.2966,
                                        longitude:103.7764,
                                        latitudeDelta:0.002,
                                        longitudeDelta:0.002}}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style = {styles.header}>
                <View flex={2}>
                    <Text style = {styles.name}>Placeholder Name</Text>
                </View>
                <View flex={1} flexDirection='row' justifyContent='flex-end' paddingRight={40}>
                    <Ionicons
                        name="notifications-outline"
                        size={24}
                        color='#0009FF' />
                </View>
            </View>
            <View style = {styles.subheader}>
                <Text style = {styles.search}>Search</Text>
                <Text style = {styles.recentAppointments}>Recent</Text>
                <Text style = {styles.recentAppointments}>Appointments</Text>
                <View style = {styles.searchBar}>
                    <EvilIcons
                    name = 'search'
                    size = {24}
                    color = '#5464F8'/>
                    <TextInput 
                        style = {styles.input}
                    />
                </View>
            </View>
            <View style = {styles.body}>
                <Text style = {styles.bodyText}>Upcoming Appointments</Text>
                <FlatList
                    paddingTop={10}
                    data={appointments}
                    numColumns={2}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {
                            showItem(item);
                            toggleModal();}}>
                            <Card>
                                <Text style={styles.clinicName}>{item.clinicName}</Text>
                                <Text style={styles.cardText}>{item.doctor}</Text>
                                <Text style={styles.cardText}>{item.date}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                                <View style={styles.circle}></View>
                            </Card>
                        </TouchableOpacity>
                    )}/>
            </View>
            <View style = {{alignItems:"center"}}><Button mode = "contained" onPress = {() => navigation.navigate("bookConsult1")}>Book an appointment</Button>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 30
    },
    header: {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 20,
    },
    subheader: {
        flex: 2.5,
        marginTop: 20,
    },
    name: {
        fontFamily: 'roboto-light',
        color: '#5464F8',
        fontSize: 25,
    },
    search: {
        fontFamily: 'roboto-light',
        fontSize: 25
    },
    recentAppointments: {
        fontFamily: 'roboto-bold',
        fontSize: 25
    },
    searchBar:{
        paddingTop:20,
        flexDirection:'row'
    },
    input: {
        marginLeft: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:10,
        paddingVertical: 2,
        width: Dimensions.get('screen').width * 0.6,
    },
    body: {
        flex: 6,
    },
    bodyText: {
        fontFamily: 'roboto-regular',
        color: '#7B7B7B',
        fontSize: 18
    },
    clinicName: {
        fontFamily: 'roboto-bold',
        color: 'white',
        fontSize: 18,
    },
    cardText: {
        fontFamily: 'roboto-regular',
        color: 'white',
        fontSize: 12,
        paddingTop: 10
    },
    timeText: {
        fontFamily: 'roboto-regular',
        color: 'white',
        fontSize: 12,
    },
    circle: {
        position: 'absolute',
        left: 0,
        bottom: -40,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 35,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalView: {
        backgroundColor: "white",
        height: 600,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dddd',
        paddingLeft:20,
        paddingTop:20
    },
    modalTitle: {
        fontFamily:'roboto-bold',
        fontSize:30,
        paddingBottom: 10
    },
    modalDoctor:{
        paddingVertical:5,
    },
    modalDescription: {
        fontFamily:'roboto-regular',
        fontSize:15,
    },
    mapView: {
        width:250,
        height:100,
        borderRadius:15
    }
});