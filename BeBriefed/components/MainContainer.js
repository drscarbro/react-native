import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StatusScreen from './StatusScreen';
import TabBar from './TabBar';

export default class MainContainer extends Component {
	_renderTab ( selected, services ) {
		const thisService = services.find( s => s.key === selected )
		return (
			<StatusScreen isUp={ thisService.isUp } lastUpTime={ thisService.lastUpTime } />
		)
	}

	render () {
		return (
			<LinearGradient colors={[ '#313D43', '#4A787A' ]} style={ styles.container } >
				{ this._renderTab( this.props.selectedService, this.props.services ) }
				<TabBar
					onTabChange={ this.props.onServiceChange }
					selectedService={ this.props.selectedService }
				/>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
