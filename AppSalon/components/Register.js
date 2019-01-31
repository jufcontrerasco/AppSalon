import React from 'react';
import { StyleSheet,Button, Text, View, TextInput } from 'react-native';


const styles = StyleSheet.create({
  logo:{
    flex: 2,
    backgroundColor: 'blue',
  },
  formulario:{
    flex: 3,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    padding: 20,
  },
  botones:{
    flex: 2,
  },
  redes:{
    flex: 1,
  },
});

export default class Register extends React.Component{
  render(){
    return(

      <View style={{
        flex: 1,
        display: this.props.dp,
      }}>
        <View style={styles.logo} >

        </View>
        <View style={styles.formulario} >

        </View>
        <View style={styles.botones} >
          <Button
          title="Registrate"
          color="#841584"
          onPress={this.props.onPress}
          />
        </View>
        <View style={styles.redes} >
          <Text>A </Text>
        </View>
      </View>
    );
  }
}
