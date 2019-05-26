import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView,
  TextInput

} from 'react-native';

export default class Home extends Component {

  static navigationOptions =
  {
     title: 'Search',
     
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/three_half-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"30€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/5_star-512.png"},
         {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Aveiro", preco:"40€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/2_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"46€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/3_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"60€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/four_half-512.png"},
         {image: "https://i.ytimg.com/vi/TNhj3q5Ye4Q/hqdefault.jpg", username:"Aveiro", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/two_half-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/5_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"30€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/1_star-512.png"},
         {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Aveiro", preco:"40€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/one_half-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"46€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/5_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"60€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/4_star-512.png"},
         {image: "https://i.ytimg.com/vi/TNhj3q5Ye4Q/hqdefault.jpg", username:"Aveiro", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/5_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/2_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"30€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/3_star-512.png"},
         {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXoW7YCR-D4udqfDrYHHImW-Qsvw1eqLn8XnmskvzxMm_rbITvA", username:"Aveiro", preco:"40€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/1_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Porto", preco:"46€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/2_star-512.png"},
         {image: "https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ", username:"Lisboa", preco:"60€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/4_star-512.png"},
         {image: "https://i.ytimg.com/vi/TNhj3q5Ye4Q/hqdefault.jpg", username:"Aveiro", preco:"50€",review:"https://cdn0.iconfinder.com/data/icons/star-ratings/100/three_half-512.png"},
      ]),
       text: '',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View  style={{height: 40, borderColor: 'gray', borderWidth: 1}}>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 0, marginLeft:9, marginRight:2}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder="Search.."
            />
          </View>
          <View style={styles.body}>
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
                       <Text style={styles.username}>{user.preco}</Text>
                       <Image 
                          source={{uri: user.review}}
                          style={{width:120,height: 70, marginTop:-5}}
                      />
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
 