/**
	QuoteButton.js
*/

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class NextQuote extends Component {
	render () {
		return (
			<TouchableOpacity style={ styles.button }onPress={ this.props.onPress } >
				<Text style={ styles.buttonText } >Next Thought</Text>
			</TouchableOpacity>
		);
	}
}

NextQuote.propTypes = {
	onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		borderWidth: 2,
		borderColor: '#FFF',
		padding: 10,
		marginBottom: 20
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18
	}
});