/**
	StartScreen
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const zenImage = require('./assets/zen.png');

export default class StartScreen extends Component {
  render() {
    return (      	
	    <View style={ styles.container }>
	      <TouchableOpacity style={ styles.button } onPress={ this.props.onStartHandler } >
	        <Image style={ styles.zenImage } source={ zenImage } />
	      	<Text style={ styles.readyText }>I'm ready to relax...</Text>
	      </TouchableOpacity>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889DAD'
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FFF',
    marginTop: 20
  },
  button: {
    backgroundColor: '#889DAD',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },
  zenImage: {
    height: 200,
    width: 200
  }
});