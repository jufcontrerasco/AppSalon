import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';

export default class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {login: 'flex', reg:'none'};
  }

  Change(){
      this.setState({ login: 'none', reg:'flex'});
  }
  Chango(){
      this.setState({ login: 'flex', reg:'none'});
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',

      }}>
        <Login dp={this.state.login} onPress={this.Change.bind(this)}/>
        <Register dp={this.state.reg} onPress={this.Chango.bind(this)}/>
      </View>
    );
  }
}
