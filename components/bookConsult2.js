import * as React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Dimensions} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';
import {Picker} from '@react-native-picker/picker';
import Button from '../shared/button';
import axios from 'axios'
import moment from 'moment'
import { userIDContext } from '../shared/userContext';
import AppLoading from 'expo-app-loading';



function bookConsult2({route, navigation}) {
    const currDate = getToday().replace("/", "-").replace("/", "-")
    const clinicID = route.params.clinicID;
    const consultType = route.params.consultType;
    const doctorName = route.params.doctorName;
    const userID = React.useContext(userIDContext);
    var clinicAppts = []
    const [timeSlotArr, setTimeSlotArr] = React.useState('')
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        axios.get(`http://192.168.86.221:3000/api/appointments/getClinicAppointments/${clinicID}`).then(response => {
            clinicAppts = response.data.map(appointment => appointment.time)
            const temp = []
            var startTime = moment().utc().set({"hour":9, "minute": 0});
            var endTime = moment().utc().set({"hour":17, "minute": 0});

            while (startTime <= endTime) {
                const tempTime = moment(startTime)
                const stringTime = tempTime.format("hh:mm")
                if (clinicAppts.includes(stringTime)) {
                    console.log("Booked")
                } else {
                    temp.push(new moment(startTime).format('HH:mm'))
                }
                startTime.add(30, 'minute')
            }
            setTimeSlotArr(temp)
        }).then(() => setLoaded(true));
    }, []);

    //Generate all available timeslots here, need to process available Slots
   

    

    const [date, setDate] = React.useState('')
    const [dateSelected, setDateSelected] = React.useState(false)
    const [selectedTime, setSelectedTime] = React.useState(timeSlotArr[0])
    const [description, setDescription] = React.useState("")
    
    function completeBooking() {
        const apptData = {
            clinicId : clinicID,
            patientId : userID, 
            date : date,
            time : selectedTime,
            content : description,
            doctorsName: doctorName,
            consultType : consultType
        }
        console.log(apptData)
        axios.post("http://192.168.86.221:3000/api/appointments/createAppointments", apptData).then((res) => {navigation.navigate("bookConsult3", apptData)})
    }
    
    
    if (loaded) {return(
        <ScrollView backgroundColor='white' style = {{flexGrow:1}}>
            <View style = {styles.container}> 
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>
                        Book a Consultation
                    </Text>
                </View>
                <View style = {styles.datePicker}> 
                    <Text style = {styles.subHeaderText}>
                        Select a Date
                    </Text>
                    <DatePicker 
                        mode = "calendar"
                        minimumDate = {currDate}
                        onDateChange = {(newDate) => {setDate(newDate);setDateSelected(true)}}
                    />
                </View>
                {dateSelected &&
                <View style = {{flex: 0.4, marginLeft:30, width:"80%"}}>
                    <Text style = {styles.subHeaderText}>Select a Time</Text>
                    <Picker 
                        mode = "dropdown"
                        selectedValue = {selectedTime}
                        onValueChange = {(selectedTime) => {setSelectedTime(selectedTime)}}
                        >
                        {timeSlotArr.map(item => (
                        <Picker.Item label = {item} value = {item} key = {item}/>  
                        ))}
                        </Picker>
                    <Text style = {{fontSize:16}}>Give a brief description of your illness:</Text>
                    <TextInput 
                        multiline
                        marginTop = {10}
                        height = {100}
                        backgroundColor = '#eeee'
                        borderRadius = {15}
                        value = {description} 
                        onChangeText = {(text) => 
                        setDescription(text)}/>
                </View>}
                {dateSelected && <View style = {{flex:0.1, alignItems:'center', justifyContent:'center', marginTop:30}}>
                    <Button text = "Next" onPress = {() => completeBooking()}/>
                </View>}
            </View>
        </ScrollView>
    );} else {
            return <AppLoading 
            onFinish={() => setLoaded(true)}/> 
    }
    
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Dimensions.get('screen').height * 0.1,
        flex: 1,
        backgroundColor:'white',
    },
    header : {
        flex:0.20,
        marginLeft: 30
    },
    datePicker : {
        flex: 0.45,
        marginTop: 30,
        marginLeft:30,
        width:"80%"
    },
    headerText : {
        fontSize: 32,
        fontFamily: 'roboto-bold'
    },
    subHeaderText: {
        fontSize:20,
        fontFamily: 'roboto-bold',
        marginBottom: 10
    }
});

export default bookConsult2;