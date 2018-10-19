/**
	QuoteScreen.js
*/
import React, { Component } from 'react';
import { Platform, UIManager, StyleSheet, View, Image, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';
import Quote from './Quotes';
import NextQuote from './QuoteButton';

const bgImage = require( './assets/bg.png' );
const tranquil = {
	duration: 500,
	create: {
		duration: 1000,
		delay: 300,
		type: LayoutAnimation.Types.easeIn,
		property: LayoutAnimation.Properties.opacity
	},
	update: {
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity
	},
	delete: {
		duration: 200,
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.opacity
	}
}

if ( Platform.OS === 'android' ) {
	UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class QuoteScreen extends Component {
	componentWillUpdate () {
		LayoutAnimation.configureNext(tranquil);
	}
  render() {
    return (
      	<View style={{ flex: 1 }} >
      	<Image source={ bgImage } style={ styles.backgroundContainer } />
		    <View style={ styles.container }>
		      	<Quote qText={ this.props.qText } qSource={ this.props.qSource } />
		    	<NextQuote onPress={ this.props.onQuoteButtonPress}  qId={ this.props.qId }/>
		    </View>
	    </View>
    );
  }
}

QuoteScreen.propTypes = {
	qText: PropTypes.string.isRequired,
	qSource: PropTypes.string.isRequired,
	onQuoteButtonPress: PropTypes.func.isRequired,
	qId: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1,
		resizeMode: 'cover',
		width: undefined,
		height: undefined
	},
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center'
	}
});