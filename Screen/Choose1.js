import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Button } from 'react-native-paper'
import * as Contacts from 'expo-contacts';

export default class Choose extends Component {


  static navigationOptions = {
    title: 'Choose',
  }

  
    render() {
        return (
            <View style={{flex:1}}>
            <View style={{flex:.5}}>
            <Image source ={require("../assets/studentlogo.png")} />

            </View>
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            
            onPress={()=>this.props.navigation.navigate("QRcode")}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Generate QR CODE
                  </Text>
              </Button>

              <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={()=>this.props.navigation.navigate("check")}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Check Group Members 
                  </Text>
              </Button>
                
            </View>
        )
    }
}
