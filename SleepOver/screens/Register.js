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
                  style={styles.inputBox}
                  placeholder=' Name'
              />
                <TextInput
                  style={styles.inputBox}
                  placeholder=' Email'
              />

              <TextInput
                  style={styles.inputBox}
                  placeholder=' Password'
                  secureTextEntry={true}
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Confirm Password'
                  secureTextEntry={true}
              />


            </View > 

            <View style={styles.welcomeContainer2}>
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
               onPress={() => this.props.navigation.navigate('AppNavigator')}
               title="Register"
               color="#34CCAE"
              />
          </View>

          <View style={styles.welcomeContainer}>
                <Text style={{color: '#5a6570'}}> Already have account? <Text style={{color: '#34CCAE'}}  onPress={()=> this.props.navigation.navigate('Login')}> Login here</Text> </Text>
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
  inputBox:{
    height: 40,width:'65%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal:10, 
    marginVertical:10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer2: {
    marginLeft:'17.5%',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'row',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'row',
    justifyContent: 'center',
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
  },
  buttons: {
    marginVertical: 10,
    width:'65%',
    marginLeft:'17.5%',
    justifyContent: 'center',
  },
});
