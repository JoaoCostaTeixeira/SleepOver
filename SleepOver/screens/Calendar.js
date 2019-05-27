import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView,
  TextInput,
  Arrow

} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

export default class Calendars extends Component {

  static navigationOptions =
  {
     title: 'Book',
     
     
  };
  constructor(props) {
    super(props);
    this.state = {
        selectedStartDate: null,
      };
     this.onDateChange = this.onDateChange.bind(this);

  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:"70%", marginLeft:"15%", marginRight:"15%", marginTop:"10%"}}>
          <CalendarPicker
            onDateChange={this.onDateChange}
          />
        </View>
        <TouchableOpacity 
            style={{borderRadius:8,backgroundColor:"#3192bf",width:90, height:40, borderWidth:1, borderColor:"#788091", marginLeft:125, alignItems:"center"}}
            onPress ={()=> alert("Your booking is now pending")}
         >
            <Text style={{fontSize:24, color:"white", fontWeight: 'bold'}}>Book</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#20B2AA",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body: {
    padding:15,
    backgroundColor :"#E6E6FA",
  },
  box: {
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-1
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  username2:{
    color: "black",
    fontSize:14,
    alignSelf:'center',
    marginLeft:10
  }
});
 