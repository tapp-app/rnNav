'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Navigator,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

class Info extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					Info! Blah blah blah...
				</Text>
				<TouchableHighlight
					onPress={() => this.back()}
					underlayColor='transparent'
					style={styles.button}
				>
					<Text style={styles.buttonText}>
						Back
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	back() {
		this.props.navigator.pop();
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

export default Info