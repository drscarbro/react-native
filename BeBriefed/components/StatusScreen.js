import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Status from './Status';
import moment from 'moment';

export default class StatusScreen extends Component {
	render () {
		let lastUpComponent
		if ( !this.props.isUp ){
			const relativeTime = moment( ).to( this.props.lastUpTime )
			lastUpComponent = <Text style={ styles.lastUpText }>Last Uptime: { relativeTime }</Text>
		}
		return (
			<View style={styles.container}>
				<Status isUp={ this.props.isUp } />
				<Text style={ styles.statusText } >Service { this.props.isUp ? 'Up!' : 'Down!' }</Text>
				{ lastUpComponent }
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	lastUpText: {
		fontSize: 20,
		marginTop: 20,
		textAlign: 'center',
		color: '#b1b3b6',
		backgroundColor: 'rgba(0,0,0,0)'
	}
});