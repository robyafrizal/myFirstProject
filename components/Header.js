import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#00a1dd',
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>QUOTESAPP</Text>
      </View>
    );
  }
}
