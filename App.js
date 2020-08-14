
import React from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import SignupScreen from './Screen/SignupScreen'
import LoginScreen from './Screen/LoginScreen'
import LoadingScreen from './Screen/LoadingScreen'
import HomeScreen from './Screen/HomeScreen'
import Choose from './Screen/Choose'
import Choose1 from './Screen/Choose1'
import UpdatePassword from './Screen/UpdatePassword'
import Join from './Screen/Join'
import Scan from './Screen/QRcode'
import Notification from './Screen/Notification'
import checkmembers from './Screen/checkmembers'


import * as firebase from 'firebase'
import {firebaseConfig} from './config'
import QRCode from 'react-native-qrcode';
firebase.initializeApp(firebaseConfig);




const mystack = createStackNavigator({
  

 
  First:Choose,
  Signup:SignupScreen,
  login: LoginScreen,
  Home:HomeScreen,
  loading: LoadingScreen,
  second:Choose1,
  Update:UpdatePassword,
  Joinpage :Join,
  QRcode: Scan,
  Notification:Notification,
  check: checkmembers,
  
  
  

},{
defaultNavigationOptions:{
  headerStyle: {
    backgroundColor: '#5187A6',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}

})


export default createAppContainer(mystack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
