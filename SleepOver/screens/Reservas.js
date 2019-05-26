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
      dataSource2: ds.cloneWithRows([
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Lisboa"},
        {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Aveiro"},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Aveiro"},
        {image: "https://images.e-konomista.pt/articles/850_400_110592-3d-rendering-of-modern-cozy-house-in-the-garden_1545305113.jpg", username:"Aveiro"},
        {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto"},
        {image: "https://diasdeumaprincesa.pt/wp-content/uploads/2018/08/353cd957-94e4-4216-a234-282da200b005-1-1170x770.jpg", username:"Porto"},
     ]),
      pos:0,
    };
  }

  render() {
    if(this.state.pos==0){
        return (
          <ScrollView style={styles.container}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center",backgroundColor:"#34CCAE"}}
              >
                  <Text style={{fontSize:17}}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:1})}
              >
                  <Text style={{fontSize:17}}>Pending</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"34%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:2})}
              >
                  <Text style={{fontSize:17}}>Active</Text>
              </TouchableOpacity>
              
            </View>
              <View style={styles.body}>
              <Text style={styles.username3}>Pending</Text>
                <ListView style={styles.container} enableEmptySections={true}
                  dataSource={this.state.dataSource}
                  renderRow={(user) => {
                    return (
                      <TouchableOpacity 
                      onPress={()=> this.props.navigation.navigate('House')}
                      >
                        <View style={styles.box}>
                          <Image style={styles.image} source={{uri: user.image}}/>
                          
                          <Text style={styles.username}>{user.username}</Text>
                          <Text style={styles.username2}>Dia:23/1/2019</Text>
                        </View>
                      </TouchableOpacity>
                    )
                }}/>

                <Text style={styles.username3}>Active</Text>
            <ListView style={styles.container} enableEmptySections={true}
                        dataSource={this.state.dataSource2}
                        renderRow={(user) => {
                            return (
                            <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('House')}
                            >
                                <View style={styles.box}>
                                <Image style={styles.image} source={{uri: user.image}}/>
                                
                                <Text style={styles.username}>{user.username}</Text>
                                <Text style={styles.username2}>Dia:23/1/2019</Text>
                                </View>
                            </TouchableOpacity>
                            )
                        }}/>    
              </View>
          </ScrollView>
        );
      }else if(this.state.pos==1){
        return (
          <ScrollView style={styles.container}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:0})}
              >
                  <Text style={{fontSize:17}}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center",backgroundColor:"#34CCAE"}}
              >
                  <Text style={{fontSize:17}}>Pending</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"34%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:2})}
              >
                  <Text style={{fontSize:17}}>Active</Text>
              </TouchableOpacity>
              
            </View>
              <View style={styles.body}>
              <Text style={styles.username3}>Pending</Text>
                <ListView style={styles.container} enableEmptySections={true}
                  dataSource={this.state.dataSource}
                  renderRow={(user) => {
                    return (
                      <TouchableOpacity 
                      onPress={()=> this.props.navigation.navigate('House')}
                      >
                        <View style={styles.box}>
                          <Image style={styles.image} source={{uri: user.image}}/>
                          
                          <Text style={styles.username}>{user.username}</Text>
                          <Text style={styles.username2}>Dia:23/1/2019</Text>
                        </View>
                      </TouchableOpacity>
                    )
                }}/>
              </View>
          </ScrollView>
        );
      }else{
        return (
          <ScrollView style={styles.container}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:0})}
              >
                  <Text style={{fontSize:17}}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"33%", height:35, alignItems:"center", backgroundColor:"#f2f2f2"}}
                onPress={()=> this.setState({pos:1})}
              >
                  <Text style={{fontSize:17}}>Pending</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{borderWidth:1, borderColor:"black", width:"34%", height:35, alignItems:"center",backgroundColor:"#34CCAE"}}
              >
                  <Text style={{fontSize:17}}>Active</Text>
              </TouchableOpacity>
              
            </View>
              <View style={styles.body}>
                <Text style={styles.username3}>Active</Text>
            <ListView style={styles.container} enableEmptySections={true}
                        dataSource={this.state.dataSource2}
                        renderRow={(user) => {
                            return (
                            <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('House')}
                            >
                                <View style={styles.box}>
                                <Image style={styles.image} source={{uri: user.image}}/>
                                
                                <Text style={styles.username}>{user.username}</Text>
                                <Text style={styles.username2}>Dia:23/1/2019 </Text>
                                </View>
                            </TouchableOpacity>
                            )
                        }}/>    
              </View>
          </ScrollView>
        );
      }

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
    padding:10,
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
 