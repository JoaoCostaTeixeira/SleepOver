import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  CheckBox,
} from 'react-native';

import { Icon } from 'expo';
export default class Login extends React.Component {

  static navigationOptions =
  {
     title: 'Login',
  };
  
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      pass: true,
      viewpass: 'md-eye-off',
    };  
  }

  onChangeCheck() {
    this.setState({ checked: !this.state.checked})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo.png')
                  : require('../assets/images/logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
              <TextInput
                  style={{height: 40,width:250, borderColor: 'gray', borderWidth: 1, paddingHorizontal:10, marginVertical:10}}
                  placeholder=' Email'
              />
              <View style={{flexDirection:'row', borderColor:'gray', borderWidth:1}}>
             
                <TextInput
                    style={{height: 17,width:215, borderColor: 'gray', borderWidth: 0, paddingHorizontal:10, marginVertical:10}}
                    placeholder=' Password'
                    secureTextEntry={this.state.pass}
                />
                <View style={{marginRight:10, marginTop:6}}>
                  <Icon.Ionicons
                    name={this.state.viewpass}
                    marginRight={100}
                    size={26}
                    onPress={() => this.state.pass ? this.setState({viewpass: 'md-eye', pass: false}) : this.setState({viewpass: 'md-eye-off', pass: true})}
                  />
              
                </View>
                
                 
              </View>
            </View > 
            
            <View style={styles.forgotPass}>
            <CheckBox
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()} />
                <Text style={{color: '#5a6570', marginTop:6}}>Remember me       <Text style={{color: '#34CCAE', textAlign:'right' }}> Forgot Password? </Text></Text>
            </View> 

              
           <View style={styles.buttons}>
              <Button 
               onPress={this.props.changeState}
               title="Login"
               color="#34CCAE"
              />
          </View>

          <View style={styles.welcomeContainer}>
                <Text style={{color: '#5a6570'}}> Don't have account? <Text style={{color: '#34CCAE'}} onPress={this.props.changeReg}> Signup here</Text> </Text>
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
    width: 250,
    height: 175,
    resizeMode: 'contain',
    marginTop: 100,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttons: {
    marginVertical: 10,
    marginHorizontal: 54,
  },
  forgotPass: {
    textAlign: 'center',
    marginVertical: 4,
    marginHorizontal: 45,
    flexDirection: 'row',
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
