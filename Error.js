'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

class Error extends Component {
	render() {
		return (
			<View style={styles.container}>
			</View>
		);
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
});

export default Error