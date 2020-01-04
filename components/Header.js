import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00a1dd',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {color: '#fff', fontWeight: 'bold'},
});
