import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import StatusScreen from './StatusScreen';
import TabBar from './TabBar'

export default class MainContainer extends Component {
	render () {
		return (
			<View style={ styles.container } >
				<StatusScreen isUp={ this.props.isUp } lastUpTime={ this.props.lastUpTime } />
				<TabBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
