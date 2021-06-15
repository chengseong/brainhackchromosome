import * as React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Dimensions} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';
import {Picker} from '@react-native-picker/picker';
import Button from '../shared/button';


function bookConsult2({navigation}) {
    const timeSlotArr = ["2.30pm - 3.00pm", "3.00pm - 3.30pm"] //Need to pull api from clinic and date after date selected 
    const currDate = getToday().replace("/", "-").replace("/", "-")

    const [date, setDate] = React.useState('')
    const [dateSelected, setDateSelected] = React.useState(false)
    const [selectedTime, setSelectedTime] = React.useState(timeSlotArr[0])
    const [description, setDescription] = React.useState("")
    
    
    

    return(
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
                        <Picker.Item label = {item} value = {item}/>  
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
                <View style = {{flex:0.1, alignItems:'center', justifyContent:'center', marginTop:30}}>
                    <Button text = "Next" onPress = {() => {navigation.navigate("bookConsult3")}}/>
                </View>
            </View>
        </ScrollView>
    );
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