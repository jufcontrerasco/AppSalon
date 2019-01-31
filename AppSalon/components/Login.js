import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { LoginManager, AccessToken, GraphRequestManager, GraphRequest} from 'react-native-fbsdk';
const styles = StyleSheet.create({
  logo:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  formulario:{
    flex: 3,
    justifyContent: 'center',
    width: 150

  },
  botones:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accesos:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redes:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imglogo:{
    width: 60,
    height: 60,
  },
  button:{
    marginBottom: 10,
    width:300,
  },
  form:{
    width: 150,
  },
});


export default class Login extends React.Component{


  render(){
    return(

      <View style={{
        flex: 1,
        display: this.props.dp,
      }}>
        <View style={styles.logo} >
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.imglogo}
        />
        </View>

        <View style={styles.formulario} >
          <View style={styles.form} >
          <FormLabel>Correo</FormLabel>
          <FormInput placeholder="Correo Electronico"/>
          <FormLabel>Contraseña</FormLabel>
          <FormInput placeholder="Contraseña"/>
          </View>
        </View>

        <View style={styles.botones} >
          <View style={styles.button} >
            <Button
            title='Iniciar Sesión'
            color="blue"
            />
          </View>
          <View style={styles.button} >
            <Button
            title='Registrate'
            color="blue"
            onPress={this.props.onPress}
            />
          </View>

        </View>

        <View style={styles.accesos} >
          <TouchableOpacity>
          <Text>Login FB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.redes} >
          <Text>A </Text>
        </View>
      </View>
    );
  }
}
