import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Quote extends Component {
	render () {
		return (
			<View style={ styles.quoteContainer } >
				<Text style={ styles.qText } >"{ this.props.qText }"</Text>
				<Text style={ styles.sText } >~{ this.props.qSource }</Text>
			</View>
		)
	}
}

Quote.propTypes = {
	qText: PropTypes.string.isRequired,
	qSource: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	quoteContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	qText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 36,
		color: '#FFF',
		margin: 30
	},
	sText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 20,
		margin: 30,
		color: '#F8F8F8',
		textAlign: 'right',
		fontStyle: 'italic'		
	}
});