import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const TabBarItem = ( props ) => {
	return (
		<View style={ styles.container } >
			<Icon name={ props.icon } style={[ styles.icon, props.selected && styles.selectedLabel ]} ></Icon>
			<Text style={[ styles.label, props.selected && styles.selectedLabel ]} >{ props.label }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		color: '#FFF',
		fontSize: 32,
		paddingVertical: 5
	},
	label: {
		color: '#FFF',
		paddingTop: 5
	},
	selectedLabel: {
		color: '#CC9766'
	}
});

export default TabBarItem