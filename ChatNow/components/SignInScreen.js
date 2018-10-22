import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

const SignInScreen = ( props ) => (
	<View style={ styles.container } >
		<View style={ styles.formContainer } >
			<Text style={ styles.label } >
				My Name:
			</Text>
			<TextInput style={ styles.textBox } />
			<Text style={ styles.label } >
				My Account Number:
			</Text>
			<TextInput style={ styles.textBox } keyboardType="numeric" />
			<TouchableOpacity style={ styles.actionButton } >
				<Text style={ styles.actionButtonText } >
					Go
				</Text>
			</TouchableOpacity>
		</View>
		<Text style={ styles.externalLink }>
			Forgot your account number?
		</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#68B8DB'
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	label: {
		fontSize: 20,
		marginTop: 36,
		marginBottom: 6,
		color: '#FFF',
		fontWeight: 'bold'
	},
	textBox: {
		height: 40,
		width: 300,
		color: '#4BA3C9',
		borderWidth: 2,
		borderColor: '#4D96B5',
		borderRadius: 6,
		backgroundColor: '#FFF',
		paddingHorizontal: 5
	},
	actionButton: {
		marginTop: 36,
		alignSelf: 'flex-end',
		backgroundColor: '#CB3B27'
	},
	actionButtonText: {
		color: '#FFF',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 10,
		marginHorizontal: 20
	},
	externalLink: {
		fontSize: 12,
		color: '#DFDFDF',
		textDecorationLine: 'underline',
		alignSelf: 'flex-start',
		marginLeft: 10,
		marginBottom: 10
	}
});

export default SignInScreen