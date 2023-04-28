import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 5,
            marginLeft: 25,
            color: 'white',
            textShadowColor: 'rgba(0, 0, 0, 0.6)',
            textShadowOffset: { width: -2.5, height: 2.5 },
            textShadowRadius: 1,
          }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
