import React,{useState} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput,Button } from 'react-native-paper'
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';



export default class UpdatePassword extends React.Component {
    
    static navigationOptions = {
        title: 'Update',
      }

     constructor(props){
         super(props);
         this.state = {
             newPassword: "",
             curenntPassword: "",
             newEmail: ""
         }
     }

     componentDidMount() {
         this.registerForPushNotifications();
     }

     registerForPushNotifications = async () =>{
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus =status;

     

     if (status !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status
     }

    if(finalStatus !== 'granted') {return; }

    let token =await Notifications.getExpoPushTokenAsync();
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("users").child(uid).update({
       
        expoPushToken : token,
    })
     }

     reauthenticate = (curenntPassword) =>{
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email,curenntPassword);
        return user.reauthenticateWithCredential(cred);
    }

     onChangePassword = () =>{

        this.reauthenticate(this.state.curenntPassword).then(()=>{
            var user = firebase.auth().currentUser;
            user.updatePassword(this.state.newPassword).then(()=>{
               Alert.alert("Password has Changed");
            }).catch((error)=>{
               Alert.alert(error.message)
            });
        }).catch((error) =>{
            Alert.alert(error.message)
        })

        
     }

     onChangeEmail = () =>{
        this.reauthenticate(this.state.curenntPassword).then(()=>{
            var user = firebase.auth().currentUser;
            user.updateEmail(this.state.newEmail).then(()=>{
               Alert.alert("Email has Changed");
            }).catch((error)=>{
               Alert.alert(error.message)
            });
        }).catch((error) =>{
            Alert.alert(error.message)
        })
     }

     


      
    render(){

        return (
            <View style={styles.container}>

<TextInput style={styles.textInput} value={this.state.curenntPassword} 
             placeholder= 'CurrentPassword' autoCapitalize='none' secureTextEntry={true}
             onChangeText={(text) => {this.setState({curenntPassword:text}) }}   
            />

            <TextInput style={styles.textInput} value={this.state.newPassword} 
             placeholder= 'new Password' autoCapitalize='none' secureTextEntry={true}
             onChangeText={(text) => {this.setState({newPassword:text}) }}   
            />

            
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={this.onChangePassword}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Change Password
                  </Text>
              </Button>

            <TextInput style={styles.textInput} value={this.state.newEmail} 
             placeholder= 'new Email' autoCapitalize='none' keyboardType="email-address"
             onChangeText={(text) => {this.setState({newEmail:text}) }}   
            />
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={this.onChangeEmail}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Change Email
                  </Text>
              </Button>


            </View>
          );

    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  text: {
      color:'white',
      fontWeight: 'bold',
      textAlign:'center',
      fontSize:20
  },
  textInput:{
      borderWidth:1,
      borderColor:'grey',
      marginVertical:20,
      padding:10,
      height:50,
      width:300,
      alignContent:'stretch'
  }
  

});