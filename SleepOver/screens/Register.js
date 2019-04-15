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
  Picker,
} from 'react-native';
export default class Register extends React.Component {

  static navigationOptions =
  {
     title: 'Login',
  };
  
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      checked2 : false,
      sex: 'Sex',
    };  
  }

  onChangeCheck() {
      if(this.state.checked==false){
        this.setState({ checked: true})
        this.setState({ checked2: false})
      }else{
        this.setState({ checked: false})
      }      
  }

  onChangeCheck2() {
    if(this.state.checked2==false){
        this.setState({ checked2: true})
        this.setState({ checked: false})
      }else{
        this.setState({ checked2: false})
      }    
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
                  placeholder=' Name'
              />
                <TextInput
                  style={{height: 40,width:250, borderColor: 'gray', borderWidth: 1, paddingHorizontal:10, marginVertical:10}}
                  placeholder=' Email'
              />

              <TextInput
                  style={{height: 40,width:250, borderColor: 'gray', borderWidth: 1, paddingHorizontal:10, marginVertical:10}}
                  placeholder=' Password'
                  secureTextEntry={true}
              />
              <TextInput
                  style={{height: 40,width:250, borderColor: 'gray', borderWidth: 1, paddingHorizontal:10, marginVertical:10}}
                  placeholder=' Confirm Password'
                  secureTextEntry={true}
              />


            </View > 

            <View style={styles.forgotPass}>
                <CheckBox
                    value={this.state.checked}
                    onChange={() => this.onChangeCheck()} />
                    <Text style={{color: '#5a6570', marginTop:6}}>Male </Text>
                <CheckBox
                  value={this.state.checked2}
                  onChange={() => this.onChangeCheck2()} />
                <Text style={{color: '#5a6570', marginTop:6}}>Female </Text>
            </View> 


           <View style={styles.buttons}>
              <Button 
               onPress={this.props.changeState}
               title="Register"
               color="#34CCAE"
              />
          </View>

          <View style={styles.welcomeContainer}>
                <Text style={{color: '#5a6570'}}> Already have account? <Text style={{color: '#34CCAE'}} onPress={this.props.changeReg}> Login here</Text> </Text>
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
    marginTop: 5,
    marginBottom: 5,
  },
  welcomeImage: {
    width: 250,
    height: 175,
    resizeMode: 'contain',
    marginTop: 1,
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
