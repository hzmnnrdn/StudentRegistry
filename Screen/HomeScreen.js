import React,{useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Button} from 'react-native-paper';
import * as firebase from 'firebase'




export default class HomeScreen extends React.Component {
    state={
        email: "",
        mylist:[],
        

    }
    static navigationOptions = {
        title: 'Home',
      };

 

      componentDidMount(){
       this.unsubscribeAuth = firebase.auth().onAuthStateChanged(user=>{
          if(user){
            this.setState({
              email:user.email
            })
          }
          else {
            this.props.navigation.replace('login');
          }
        })
       

        const rootRef1 = firebase.database().ref();
        const animalRef1=rootRef1.child('Group-1')
        
      animalRef1.on('value',(snapshot)=>{
           const check = [];
          snapshot.forEach((doc)=>{
            check.push({
            //  key:doc.key,
              member:doc.toJSON(snapshot)
              
            })
            
          })

          

          const a=(check[1])

          if (a!=undefined){
          this.setState({
            twoName1:check[1].member.name.Name
          })
          this.setState({
            twoCN1:check[1].member.ContactNo.CNumber
          })
          this.setState({
            twoMN1:check[1].member.MatricNo.MatricNo
          })
        }

         const b=(check[0])
         if (b!=undefined){
          this.setState({
            oneName1:check[0].member.name.Name
          })
          this.setState({
            oneCN1:check[0].member.ContactNo.CNumber
          })
          this.setState({
            oneMN1:check[0].member.MatricNo.MatricNo
          })
         }

         const c=(check[2])
         if (c!=undefined){
          this.setState({
            threeName1:check[2].member.name.Name
          })
          this.setState({
            threeCN1:check[2].member.ContactNo.CNumber
          })
          this.setState({
            threeMN1:check[2].member.MatricNo.MatricNo
          })
         }

         
       })

       


       const rootRef2 = firebase.database().ref();
       const animalRef2=rootRef2.child('Group-2')

       animalRef2.on('value',(snapshot)=>{
        const check1 = [];
       snapshot.forEach((doc)=>{
         check1.push({
         //  key:doc.key,
           member:doc.toJSON(snapshot)
           
         })
         
       })
      // console.log(check1[0].member.name.Name)

       const d=(check1[0])

          if (d!=undefined){
          this.setState({
            oneName2:check1[0].member.name.Name
          })
          this.setState({
            oneCN2:check1[0].member.ContactNo.CNumber
          })
          this.setState({
            oneMN2:check1[0].member.MatricNo.MatricNo
          })
        }

        const e=(check1[1])

        if (e!=undefined){
        this.setState({
          twoName2:check1[1].member.name.Name
        })
        this.setState({
          twoCN2:check1[1].member.ContactNo.CNumber
        })
        this.setState({
          twoMN2:check1[1].member.MatricNo.MatricNo
        })
      }

      const f=(check1[2])

        if (f!=undefined){
        this.setState({
          threeName2:check1[2].member.name.Name
        })
        this.setState({
          threeCN2:check1[2].member.ContactNo.CNumber
        })
        this.setState({
          threeMN2:check1[2].member.MatricNo.MatricNo
        })
      }
        
      })

      const rootRef3 = firebase.database().ref();
       const animalRef3=rootRef3.child('Group-3')

      animalRef3.on('value',(snapshot)=>{
        const check2 = [];
       snapshot.forEach((doc)=>{
         check2.push({
         //  key:doc.key,
           member:doc.toJSON(snapshot)
           
         })
         
       })

       

       const g=(check2[1])

       if (g!=undefined){
       this.setState({
         twoName3:check2[1].member.name.Name
       })
       this.setState({
         twoCN3:check2[1].member.ContactNo.CNumber
       })
       this.setState({
         twoMN3:check2[1].member.MatricNo.MatricNo
       })
     }

      const h=(check2[0])
      if (h!=undefined){
       this.setState({
         oneName3:check2[0].member.name.Name
       })
       this.setState({
         oneCN3:check2[0].member.ContactNo.CNumber
       })
       this.setState({
         oneMN3:check2[0].member.MatricNo.MatricNo
       })
      }

      const i=(check2[2])
      if (i!=undefined){
       this.setState({
         threeName3:check2[2].member.name.Name
       })
       this.setState({
         threeCN3:check2[2].member.ContactNo.CNumber
       })
       this.setState({
         threeMN3:check2[2].member.MatricNo.MatricNo
       })
      }

      
    })
      }

      userSignout(){
        firebase.auth().signOut()
        .catch(error=>{
          Alert.alert(error.message)
        })
      }

      componentWillUnmount(){
        this.unsubscribeAuth()
      }

      

    render(){
      


        return (
            <View style={styles.container}>
            <View style={{flex:.5,alignItems:'flex-start',backgroundColor:'#7EBCB4'}}>
              <Text style={{color:'#17140C',fontSize:20}}>Group-1</Text>
              <Text></Text>
              <Text style={{color:'black'}}>Name: {this.state.oneName1}  MatricNo {this.state.oneMN1}  Contact {this.state.oneCN1}</Text>
              <Text> ----------------------------------------------------------------------------------------------</Text>
              <Text style={{color:'black'}}>Name: {this.state.twoName1}  MatricNo {this.state.twoMN1}  Contact {this.state.twoCN1}</Text>
              <Text > ----------------------------------------------------------------------------------------------</Text>
              <Text style={{color:'black'}}>Name: {this.state.threeName1}  MatricNo {this.state.threeMN1}  Contact {this.state.threeCN1}</Text>
              <Text> ----------------------------------------------------------------------------------------------</Text>
             
              
              
              
              
            </View>
            <View style={{flex:.5,alignItems:'flex-start',backgroundColor:'black'}}>
            <Text style={{color:'white',fontSize:20}}>Group-2</Text>
              <Text></Text>
            <Text style={{color:'white'}}> Name: {this.state.oneName2}  MatricNo {this.state.oneMN2}  Contact {this.state.oneCN2}</Text>
              <Text style={{color:'white'}}> ----------------------------------------------------------------------------------------------</Text>
              <Text style={{color:'white'}}>Name: {this.state.twoName2}  MatricNo {this.state.twoMN2}  Contact {this.state.twoCN2}</Text>
              <Text style={{color:'white'}}> ----------------------------------------------------------------------------------------------</Text>
              <Text style={{color:'white'}}>Name: {this.state.threeName2}  MatricNo {this.state.threeMN2}  Contact {this.state.threeCN2}</Text>
              <Text style={{color:'white'}}> ----------------------------------------------------------------------------------------------</Text>
             
              
              
            </View>
            <View style={{flex:.5,alignItems:'flex-start',backgroundColor:'#D97979'}}>
            <Text style={{color:'#17140C',fontSize:20}}>Group-3</Text>
              <Text></Text>
            <Text>Name: {this.state.oneName3}  MatricNo {this.state.oneMN3}  Contact {this.state.oneCN3}</Text>
              <Text> ----------------------------------------------------------------------------------------------</Text>
              <Text>Name: {this.state.twoName3}  MatricNo {this.state.twoMN3}  Contact {this.state.twoCN3}</Text>
              <Text> ----------------------------------------------------------------------------------------------</Text>
              <Text>Name: {this.state.threeName3}  MatricNo {this.state.threeMN3}  Contact {this.state.threeCN3}</Text>
              <Text> ----------------------------------------------------------------------------------------------</Text>
              
              
            </View>
           
          
              
          
            
            
            <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={()=>this.userSignout()}
            >
                  <Text style={{fontSize:15,color:'#FFF'}}>
                    LogOut
                  </Text>
              </Button>
              <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={()=>this.props.navigation.navigate("Update")}
            >
                  <Text style={{fontSize:15,color:'#FFF'}}>
                    Update Email
                  </Text>
              </Button>
              <Button 
            style={{margin:10,justifyContent:'center',backgroundColor:'#5187A6'}}
            onPress={()=>this.props.navigation.navigate("Joinpage")}
            >
                  <Text style={{fontSize:15,color:'#FFF'}}>
                    Join Group
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
  },
  check:{
   backgroundColor:'red',
   flex:1,
   alignItems:'center',
   justifyContent: 'center',
   flexDirection:'row'
  }

});
