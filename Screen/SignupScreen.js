import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';
import {TextInput,Button,DefaultTheme, Provider as PaperProvider  } from 'react-native-paper'
import * as firebase from 'firebase'


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default class SignupScreen extends React.Component {
    state={
        email:"",
        Password:"",
    }



    static navigationOptions = {
        title: 'Sign Up',
      }

userSignup(email,pass){
  console.log(this.state)
  firebase.auth().createUserWithEmailAndPassword(email,pass)
  .then(()=>
  {this.props.navigation.replace('Home')
})
 .catch(error=>{
  Alert.alert(error.message)

 })
}

    render(){

        return (
          <PaperProvider theme={theme}>
            <View style={styles.container}>
            <View style={{flex:.9}} >
              <Image source ={require("../assets/studentlogo.png")  } />
              </View>
              <TextInput
          value={this.state.email}
          onChangeText={(text) => this.setState({ email:text })}
           label='Email'
           selectionColor='#5187A6'
          
        />
        <TextInput style={{color:'green'}}
          value={this.state.Password}
          onChangeText={(text) => this.setState({ Password:text })}
          label='Password'
          selectionColor='#5187A6'
          secureTextEntry={true}
          
        />
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
          onPress={()=>this.userSignup(this.state.email,this.state.Password)}

            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                    Sign Up
                  </Text>
              </Button>
              <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate("login")}
              >
                <Text style={{textAlign:'center',color:"#FFF",fontSize:15,fontWeight:'bold'}}>Already Have an account ?</Text>
              </TouchableOpacity>
              
            </View> 
            </PaperProvider> 
          );

    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  

});
