import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView,

} from 'react-native';

export default class MessegeBox extends Component {

  static navigationOptions =
  {
     title: 'Messeges',
     
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"João"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Manel"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Pedro"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Maria"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"José"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Marcio"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Paula"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Patricia"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"António"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Marcelo"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Guilherme"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Helena"},
      ]),
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity 
                  onPress={()=> this.props.navigation.navigate('Links')}
                  >
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: user.image}}/>
                      
                       <Text style={styles.username}>{user.username}</Text>
                       <Text style={styles.username2}>Olá obrigado pela reserva.</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
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
  box: {
    padding:5,
    marginTop:10,
    marginBottom:10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
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
 