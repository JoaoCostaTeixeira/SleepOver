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

} from 'react-native';

export default class House extends Component {

  static navigationOptions =
  {
     title: 'Porto',
     
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
            <View style={{height:60,marginTop:10, flexDirection:'row',backgroundColor:"#8cb2ff", alignItems:"center"}}>
             <Text style={{marginLeft:25,fontSize:24, color:"#514f4f", fontWeight: 'bold'}}>Price:</Text>
             <Text style={{marginLeft:8,fontSize:24, color:"#514f4f", fontWeight: 'bold'}}>50€</Text>
             <TouchableOpacity 
                style={{borderRadius:8,backgroundColor:"#3192bf",width:90, height:40, borderWidth:1, borderColor:"#788091", marginLeft:125, alignItems:"center"}}
                onPress ={()=> alert("Your booking is now pending")}
             >
                    <Text style={{fontSize:24, color:"white", fontWeight: 'bold'}}>Book</Text>
             </TouchableOpacity>
         </View>
        <View style={{marginLeft:3, marginRight:3, marginTop:10, alignItems:'center'}}>
            <Image
                source={{uri: 'https://i.ytimg.com/vi/TNhj3q5Ye4Q/hqdefault.jpg'}}
                style={{width:325,height: 250}}
            />
         </View>
        <View style={{backgroundColor:"#d9e2f4", marginTop:10, marginBottom:10}}>


        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
             <Image 
             source={{uri: 'https://cdn4.iconfinder.com/data/icons/maps-and-navigation-solid-icons-vol-1/72/19-512.png'}}
             style={{width:30,height: 30}}
            />
             <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>Rua da Constituição</Text>
         </View>

         <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
             <Image 
             source={{uri: 'https://cdn0.iconfinder.com/data/icons/healthcare-medical-4/512/bed-512.png'}}
             style={{width:30,height: 30}}
            />
             <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>3 Beds</Text>
         </View>


         <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
             <Image 
             source={{uri: 'https://cdn4.iconfinder.com/data/icons/hotel-facilities-1/512/pet-friendly-512.png'}}
             style={{width:30,height: 30}}
            />
             <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>Pet friendly</Text>
         </View>

         <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
            <Text style={{marginLeft:8,fontSize:20, color:"black"}}>Average Rating:</Text>
             <Image 
             source={{uri: 'https://cdn0.iconfinder.com/data/icons/star-ratings/100/three_half-512.png'}}
             style={{width:120,height: 70, marginTop:-20}}
            />
         </View>
         </View>

            <View style={styles.box2}>
                <Image 
                    source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}}
                    style={{width:60,height: 60}}
                />
                <Text style={{marginLeft:8,fontSize:20, color:"black"}}>João Carlos</Text>
                <TouchableOpacity 
                    style={{borderRadius:3,backgroundColor:"#e8f2f2",width:100, height:30, borderWidth:1, borderColor:"#788091", marginLeft:30, alignItems:"center"}}
                    onPress ={()=> this.props.navigation.navigate('Links')}
                >
                <Text style={{fontSize:16, color:"#737a7a", fontWeight: 'bold'}}>Contact</Text>
                </TouchableOpacity>
            </View>

          <View style={styles.body2}>
              <View style={{marginLeft:3, marginRight:3, marginTop:4}}>
                <Image
                    source={require('../assets/images/map2.jpg')}
                   style={{width:325,height: 150,marginLeft:-15}}
                />
             </View>
          </View>
          <Text style={{marginLeft:8,fontSize:23, color:"black"}}>Reviews</Text>
          <View style={styles.box}>
                <Image 
                    source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}}
                    style={{width:60,height: 60}}
                />
                 <Image 
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/star-ratings/100/three_half-512.png'}}
                    style={{width:120,height: 70, marginTop:-7}}
                 />
                 <Text style={{marginLeft:8,fontSize:12, color:"black"}}>Loved the hospitality.</Text>
        </View>

        <View style={styles.box}>
                <Image 
                    source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}}
                    style={{width:60,height: 60}}
                />
                 <Image 
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/star-ratings/100/5_star-512.png'}}
                    style={{width:120,height: 70, marginTop:-7}}
                 />
                 <Text style={{marginLeft:8,fontSize:12, color:"black"}}>Amazing place.</Text>
        </View>

        <View style={styles.box}>
                <Image 
                    source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}}
                    style={{width:60,height: 60}}
                />
                 <Image 
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/star-ratings/100/4_star-512.png'}}
                    style={{width:120,height: 70, marginTop:-7}}
                 />
                 <Text style={{marginLeft:8,fontSize:12, color:"black"}}>Nice view.</Text>
        </View>

        <View style={styles.box}>
                <Image 
                    source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}}
                    style={{width:60,height: 60}}
                />
                 <Image 
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/star-ratings/100/two_half-512.png'}}
                    style={{width:120,height: 70, marginTop:-7}}
                 />
                 <Text style={{marginLeft:8,fontSize:12, color:"black"}}>Didnt like the bed.</Text>
        </View>


      </ScrollView>
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
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  body2: {
    padding:30,
  },
  box2: {
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-1
    },
    height:60,
    elevation:2,
    alignItems:"center"
  },
  box: {
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    marginBottom:5,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-1
    },
    height:60,
    elevation:2,
    alignItems:"center"
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
 