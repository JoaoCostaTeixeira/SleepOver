import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import LogNav from './navigation/LogNav';
import Loading from './screens/Loading'

export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      login:false,
      register: false,
    }
  }


  
  componentDidMount(){
    console.disableYellowBox = true;
     setTimeout(() => this.setState({isLoadingComplete: true}), 3000);
  }

  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <LogNav  />
        </View>
      );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/logo.png'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
