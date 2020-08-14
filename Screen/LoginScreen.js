import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Alert } from 'react-native';
import {TextInput,Button,DefaultTheme, Provider as PaperProvider  } from 'react-native-paper'

import * as firebase from 'firebase';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default class LoginScreen extends React.Component {
    state={
         email:"",
        Password:"",
    }



    static navigationOptions = {
        title: 'Login',
      };

      userSignin(email,pass){ 
        
        console.log(this.state)
        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then (()=>{
          
          this.props.navigation.replace('Home')
          }
      
        )
        .catch (error=>{
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
          onChangeText={(text) => this.setState({  email:text })}
           label='Email No'
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
            onPress={()=>this.userSignin(this.state.email,this.state.Password)}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                    Log In
                  </Text>
              </Button>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("Signup")}
              >
                <Text style={{textAlign:'center',color:"#FFF",fontSize:15,fontWeight:'bold'}}>No account??</Text>
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
