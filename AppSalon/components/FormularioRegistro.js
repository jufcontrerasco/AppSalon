import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends React.Component{


  const styles = StyleSheet.create({
    name:{
      backgroundColor: '#ffff',
      placeholder: 'Nombre',
    },
  });

  render(){
    return(
      <View style{styles.container} >
        <TextInput style{styles.name} > /* */

        </TextInput>
        <TextInput style{styles.lastname} >

        </TextInput>
        <TextInput style{styles.gender} >

        </TextInput>
        <TextInput style{styles.BirthDate} >

        </TextInput>
        <TextInput style{styles.typeUser} >

        </TextInput>
        <TextInput style{styles.cellphone} >

        </TextInput>
        <TextInput style{styles.email} >

        </TextInput>
        <TextInput style{styles.password} >

        </TextInput>
        <TextInput style{styles.Rpassword} >

        </TextInput>
      </View>
    );
  }
}
