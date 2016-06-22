'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

class Hello extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					Hello World!
				</Text>
				<TouchableHighlight
					onPress={() => this.openInfo()}
					underlayColor='transparent'
					style={styles.button}
				>
					<Text style={styles.buttonText}>
						More Info
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	openInfo() {
		this.props.navigator.push({
			id: 'info',
			title: 'Info',
			prevRoute: 'Back'
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#666',
	},
	button: {
		height: 50,
		margin: 20,
		backgroundColor: '#33CC00',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#FFF',
	},
});

export default Hello