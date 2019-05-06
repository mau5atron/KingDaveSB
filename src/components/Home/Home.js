import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './HomeStyleChickenSandwich.js';
import Config from 'react-native-config'

export default class Home extends Component {
  render = () => {
    return(
      <View style={styles.container}>
        <Text>{Config.ENV}</Text>
        <Text style={styles.textStyle}>da cheese</Text>
        <Text style={styles.textStyle}>OR</Text>
        <Image source={require('../../images/cheese.png')} />
        <Text style={styles.textStyle}>da ranch fo today 😳</Text>
      </View>
    );
  }
}