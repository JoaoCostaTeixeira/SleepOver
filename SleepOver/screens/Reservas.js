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

export default class Reservas extends Component {

  static navigationOptions =
  {
     title: 'Reservas',
     
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa"},
         {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Aveiro"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa"},
         {image: "https://i.ytimg.com/vi/TNhj3q5Ye4Q/hqdefault.jpg", username:"Aveiro"},
      ]),
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.body}>
          <Text style={styles.username3}>Pendentes</Text>
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
                       <Text style={styles.username2}>Dia:23/1/2019 Preço: 50€</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>

            <Text style={styles.username3}>Ativas</Text>
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
                            <Text style={styles.username2}>Dia:23/1/2019 Preço: 50€</Text>
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
    fontSize:18,
    alignSelf:'center',
    marginLeft:10
  },
  username2:{
    color: "black",
    fontSize:14,
    alignSelf:'center',
    marginLeft:10
  },
  username3:{
    color: "black",
    fontSize:14,
    marginLeft:10
  }
});
 