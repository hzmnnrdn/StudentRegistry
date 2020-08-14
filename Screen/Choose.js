import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { configureFonts,Button,DefaultTheme, Provider as PaperProvider  } from 'react-native-paper'
import * as Contacts from 'expo-contacts';




const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  },
};

export default class Choose extends Component {


  static navigationOptions = {
    title: 'Choose',
  }


  
    render() {
        return (
          <PaperProvider theme={theme}>
 
            <View style={{flex:1}}>
            <View style={{flex:.5}}>
            <Image source ={require("../assets/studentlogo.png")} />

            </View>
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            
            onPress={()=>this.props.navigation.navigate("second")}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Group Leader
                  </Text>
              </Button>

              <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={()=>this.props.navigation.navigate("Signup")}
            >
                  <Text style={{fontSize:22,color:'#FFF'}}>
                Group Member
                  </Text>
              </Button>
                
            </View>
            </PaperProvider>
        )
    }
}
