import React from 'react';
import {View, Button, AsyncStorage} from 'react-native';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to theeee app!',
    };
  
    render() {
      return (
        <View style ={{flex:1,backgroundColor:'red'}}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }