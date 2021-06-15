import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import Button from '../shared/button';


export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return ( 

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Calendar</Text>
        <View flex={1} flexDirection='row' justifyContent='flex-end' paddingRight={40} paddingTop={10}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color='#0009FF' />
        </View>
      </View>
      
      <StatusBar style="auto" />
      <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={'2021-06-15'}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            theme={{agendaTodayColor: '#5464F8', agendaDayTextColor:'#5464F8', dotColor: 'salmon',selectedDayBackgroundColor:'#5464F8',todayTextColor:'#5464F8'}}
        />
      <View
          flex={0.113}
          alignItems="center"
          paddingTop={10}>
            <Button
                onPress={() => navigation.navigate("bookConsult1")}
                text='Book an appointment'/>
      </View>
    </View>


        
        
    
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 0; //this is to allocate the number of fixed items in the calender 
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item foadsfsadfr ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity

        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>There are no appointments for this day!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  container: {
      paddingTop: Dimensions.get('screen').height * 0.05,
      flex: 1,
      backgroundColor: 'white'
  },
  text: {
    fontSize: 40,
    paddingLeft: 30,
    fontFamily: 'roboto-light'
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
  },
});
