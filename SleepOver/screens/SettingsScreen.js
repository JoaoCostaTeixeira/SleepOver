//This is an example code to show React Native Round Shape Image//
import React, { Component } from 'react';
//import react in our code. 

import { Platform, StyleSheet, View, Image, Text, ScrollView, Button } from 'react-native';
//import all the components we are going to use. 


export default class App extends Component {

  static navigationOptions =
  {
     title: 'Profile',
     
  };

  constructor(props){
    super(props);
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',}}
          style={{ width: 120, height: 120, borderRadius: 120 / 2, marginTop:50 }}
        />
        <Text style={styles.text}>João Teixeira</Text>
         <View style={styles.MainContainer2}>
            <View style={{marginLeft:9,}}>
                <Button
                      onPress={()=> this.props.navigation.navigate('Login')}
                      title="LogOut"
                      color="#34CCAE"
                />
             </View>
        </View>
        <View style={{backgroundColor:"#cecaca", marginTop:50, marginBottom:10, width:"90%", marginLeft:"5%", marginRight:"5%"}}>


        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-symbol-2.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>912 912 912</Text>
          </View>
          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/email-51/48/25-512.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>joaocostateixeira@ua.pt</Text>
          </View>
          


          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'https://cdn4.iconfinder.com/data/icons/maps-and-navigation-solid-icons-vol-1/72/19-512.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>Rua da Aviação Naval</Text>
          </View>

          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/kitchen-universe-4/140/16_birthday_cake-512.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>23/01/1997</Text>
          </View>

        

          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/medcare/512/Fertility-512.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>Male</Text>
          </View>
          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
              <Image 
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/business-glyph-vol-01/100/Job-512.png'}}
              style={{width:30,height: 30}}
              />
              <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>Front-End Developer</Text>
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

