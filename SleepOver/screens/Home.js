import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Icon } from 'expo';
import { MonoText } from '../components/StyledText';

export default class Home extends React.Component {
  static navigationOptions =
  {
     title: 'Home',
     
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.homeButton}>
            <View style={{marginHorizontal:10}}>
              <Image
                  source={
                    __DEV__
                      ? require('../assets/images/casa1.jpg')
                      : require('../assets/images/casa1.jpg')
                  }
                  style={styles.welcomeImage}
                />
            </View>
            <View style={{flexDirection:'column', marginHorizontal:5, marginVertical:10}}>
              <Text style={{fontSize:15, color: 'blue'}}>Rua José Soares de Almeida</Text>
              <Text>PT</Text>
              <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:11}}>100 reviews</Text>
                  <Text style={{textAlign:'right', fontSize:25, fontWeight:'bold', marginHorizontal:55}}> 50€</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeButton}>
            <View style={{marginHorizontal:10}}>
              <Image
                  source={
                    __DEV__
                      ? require('../assets/images/casa1.jpg')
                      : require('../assets/images/casa1.jpg')
                  }
                  style={styles.welcomeImage}
                />
            </View>
            <View style={{flexDirection:'column', marginHorizontal:5, marginVertical:10}}>
              <Text style={{fontSize:15, color: 'blue'}}>Rua José Soares de Almeida</Text>
              <Text>PT</Text>
              <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:11}}>100 reviews</Text>
                  <Text style={{textAlign:'right', fontSize:25, fontWeight:'bold', marginHorizontal:55}}> 50€</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeButton}>
            <View style={{marginHorizontal:10}}>
              <Image
                  source={
                    __DEV__
                      ? require('../assets/images/casa1.jpg')
                      : require('../assets/images/casa1.jpg')
                  }
                  style={styles.welcomeImage}
                />
            </View>
            <View style={{flexDirection:'column', marginHorizontal:5, marginVertical:10}}>
              <Text style={{fontSize:15, color: 'blue'}}>Rua José Soares de Almeida</Text>
              <Text>PT</Text>
              <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:11}}>100 reviews</Text>
                  <Text style={{textAlign:'right', fontSize:25, fontWeight:'bold', marginHorizontal:55}}> 50€</Text>
              </View>
            </View>
          </View>
          <View style={{postition:'absolute', alignItems: 'center', marginVertical:65, justifyContent: 'center' }}> 
              <Icon.Ionicons
                    name='md-add-circle-outline'
                    size={50}
                    color={'#b8e5b7'}
               />
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  homeButton:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection:'row',  
    marginHorizontal:8, 
    borderBottomWidth:1,
    marginVertical:8, 
    height:85, 
    
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginTop: -10,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
