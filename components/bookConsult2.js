import * as React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-paper';


function bookConsult2({navigation}) {
    const timeSlotArr = ["2.30pm - 3.00pm", "3.00pm - 3.30pm"] //Need to pull api from clinic and date after date selected 
    const currDate = getToday().replace("/", "-").replace("/", "-")

    const [date, setDate] = React.useState('')
    const [dateSelected, setDateSelected] = React.useState(false)
    const [selectedTime, setSelectedTime] = React.useState(timeSlotArr[0])
    const [description, setDescription] = React.useState("")
    
    
    

    return(
        <ScrollView style = {{flexGrow:1}}>
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
                <TextInput value = {description} onChangeText = {(text) => setDescription(text)}/>
            </View>}
            <View style = {{flex:0.1, alignItems:'center', justifyContent:'center', marginTop:30}}>
                <Button mode = "contained" onPress = {() => {navigation.navigate("bookConsult3")}}>Next</Button>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        flex:0.20,
        marginTop:30,
        alignItems:"center"
    },
    datePicker : {
        flex: 0.45,
        marginLeft:30,
        width:"80%"
    },
    headerText : {
        fontSize: 32,
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize:20,
        fontWeight: 'bold'
    }
});

export default bookConsult2;