import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { NavigationActions } from 'react-navigation';


export default class Loading extends React.Component {

  static navigationOptions = {
    title: 'app.json',
  };
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.image}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo.png')
                  : require('../assets/images/logo.png')
              }
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginTop:'45%',
    alignItems: 'center',
    
  },
  
});
