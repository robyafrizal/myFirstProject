import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Body extends Component {
  render() {
    const {content} = this.props;
    return (
      <View style={styles.body}>
        <Text>Quotes of The Day</Text>
        <Text style={styles.textBody}>{content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBody: {
    width: '80%',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 15
  },
});
