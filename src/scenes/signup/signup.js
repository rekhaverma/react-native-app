import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signUpAsync} />
        </View>
      );
    }
  
    __signUpAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }