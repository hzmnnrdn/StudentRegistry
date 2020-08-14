import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text,} from 'react-native';
// import all basic components
import Barcode from "react-native-barcode-builder";

import QRCode from 'react-native-qrcode';
 
//import QRCode

export default class Scan extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      // Default Value of the TextInput
      valueForQRCode: 'NULL',
      // Default value for the QR Code
    };
  }

  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
      <View style={styles.BARCode}>
      <QRCode 
          value={this.state.valueForQRCode}
          //Setting the value of QRCode
          size={500}
          bgColor='#5187A6'
          fgColor='white'
          text={this.state.valueForQRCode}
        />
      </View>
        
        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ inputValue: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QRCode"
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QRCODE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
    justifyContent:'center',
    
  },
  BARCode: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1, 
    marginLeft:250,
    marginTop:100
  },

  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#5187A6',
    marginBottom: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});