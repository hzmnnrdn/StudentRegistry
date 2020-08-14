import React,{useState} from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'




export default class LoadingScreen extends React.Component {
    static navigationOptions={
      header:null
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.props.navigation.navigate("Home")
        }
        else{
          this.props.navigation.navigate("login")
        }
      })
    }
    render(){

        return (
            <View style={styles.container}>
            <ActivityIndicator  size="large" color="#5187A6"/>
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
  },
  

});
