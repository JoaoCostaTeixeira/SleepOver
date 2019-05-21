//This is an example code to show React Native Round Shape Image//
import React, { Component } from 'react';
//import react in our code. 

import { Platform, StyleSheet, View, Image, Text, ScrollView, Button } from 'react-native';
//import all the components we are going to use. 


export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',}}
          style={{ width: 120, height: 120, borderRadius: 120 / 2, marginTop:50 }}
        />
        <Text style={styles.text}>João Teixeira</Text>
        <Text style={styles.text2}>joaocostateixeira@ua.pt</Text>
         <View style={styles.MainContainer2}>
            <View >
                <Button
                    
                      onPress={()=> alert('mudou')}
                      title="Change to landlord"
                      color="#34CCAE"
                />
            </View>
            <View style={{marginLeft:9,}}>
                <Button
                      onPress={()=> alert('mudou')}
                      title="LogOut"
                      color="#34CCAE"
                />
             </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
  },
   MainContainer2: {
    marginTop:5,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
  },
  bottomcontroler: {
    marginTop:30,
    height:'75%',
    width:'100%',
    backgroundColor: '#ccdfff',
  },
  text: {
    marginTop: 15,
    fontSize: 20,
    color: '#2c2d30',
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#2c2d30',
    fontWeight: 'bold',
  },
   text3: {
    marginTop: 10,
    fontSize: 20,
    color: '#2c2d30',
    marginLeft:10,
  },
});

