import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';
import Config from 'react-native-config'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{Config.title}</Text>
        <Text>{Config.ENV}</Text>
        <Text style={styles.textStyle}>da cheese</Text>
        <Text style={styles.textStyle}>OR</Text>
        <Image source={require('./src/images/cheese.png')} />
        <Text style={styles.textStyle}>da ranch fo today 😳</Text>
      </View>
    );
  }
}``

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  textStyle: {
    fontSize: 40,
  }

});
