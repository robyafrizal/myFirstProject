import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Subheader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#f5595b',
          height: 50,
          justifyContent: 'center',
          paddingLeft: 15,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Popular Quotes</Text>
      </View>
    );
  }
}
