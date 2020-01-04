import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Subheader extends Component {
  render() {
    const {subtitle} = this.props;
    return (
      <View style={styles.subHeader}>
        <Text style={styles.textSubheader}>{subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#f5595b',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  textSubheader: {color: '#fff', fontWeight: 'bold'},
});
