import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';
import {Button} from 'react-native-paper';


function bookConsult2() {
    const [date, setDate] = React.useState(new Date())
    const [displayTime, setDisplayTime] = React.useState(false)
    const currDate = getToday().replace("/", "-").replace("/", "-")

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
                    value = {new Date()}
                    mode = "calendar"
                    minimumDate = {currDate}
                    onDateChange = {(newDate) => {setDate(newDate);}}
                />
            </View>
            <View style = {{flex: 0.4, marginLeft:30, width:"80%"}}>
                <Text style = {styles.subHeaderText}>Select a Time</Text>
            </View>
            <View style = {{flex:0.1, alignItems:'center', justifyContent:'center'}}><Button mode = "contained">Next</Button></View>
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