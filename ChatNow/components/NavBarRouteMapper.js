import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	Platform
} from 'react-native'

const NavBarRouteMapper = {
	LeftButton: ( route, navigator, index, navState ) => {
		if ( index === 0 ) return null

		return (
			<TouchableOpacity onPress={ ( ) => { navigator.pop( ) }}>
				<Text style={[ styles.navText, styles.backText ]} >Back</Text>
			</TouchableOpacity>
		)
	},
	RightButton: ( route, navigator, index, navState ) => {
		if ( route.name === 'ChatScreen') {
			return (
				<TouchableOpacity onPress={ ( ) => { navigator.popToTop( ) } }>
					<Text style={[ styles.navText, styles.doneText ]}>Done</Text>
				</TouchableOpacity>
			)
		}
	},
	Title: ( route, navigator, index, navState ) => (
		<Text style={[ styles.navText, styles.titleText ]} >
			{ (route.title ? route.title : route.name).toUpperCase( ) }
		</Text>
	)
}

const styles = StyleSheet.create({
	navText: {
		color: '#4B70A7',
		letterSpacing: 2,
		fontSize: Platform.OS === 'ios' ? 16 : 24,
		fontWeight: Platform.OS === 'ios' ? '500' : '300',
		marginVertical: 10
	},
	titleText: {
		alignSelf: 'center',
		marginLeft: -70
	},
	backText: {
		alignSelf: 'flex-start',
		marginLeft: 20
	},
	doneText: {
		alignSelf: 'flex-end',
		marginRight: 20
	}
})

export default NavBarRouteMapper