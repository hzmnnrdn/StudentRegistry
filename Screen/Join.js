import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TextInput } from 'react-native-paper';
import * as Contacts from 'expo-contacts';





export default function Join() {

  



    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [Name, setName] = React.useState('');
    const [MatricNo, setMatricNo] = React.useState('');
    const [CNumber, setCNumber] = useState(['818212']);
    const [groupname,setgroupname]= useState('');

  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers],
          });
  
          if (data.length > 0) {
            const contact = data[2];
            const lolali=contact.phoneNumbers;
            setCNumber(lolali[0].number)  
          }
        }
      })();

      if (scanned==true){
        if(groupname=='Group-1' || groupname=='Group-2' || groupname=='Group-3'){
          alert(`Welcome to ${groupname}`);
      firebase.database().ref(groupname).push(
        {
          name : {Name},
          MatricNo: {MatricNo},
          ContactNo: {CNumber}, 
        }
        )
      }
      else{
        alert(`Scan the correct code`);
      }
      }
    }
    );
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
    //  alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setgroupname(data);

    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    console.log(Name);

    
  
    return (
      
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <View style={{flex:.5}}>
        <TextInput
      label="Name"
      value={Name}
      onChangeText={Name => setName(Name)}
    />
    <TextInput
      label="MatricNo"
      value={MatricNo}
      onChangeText={MatricNo => setMatricNo(MatricNo)}
    />
    <Text>Your contact number is {CNumber}</Text>
    <Text>Your name is {Name}</Text>
    <Text>Your Matric is {MatricNo}</Text>
            
        </View>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{flex:1}}
        />
  
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
  }