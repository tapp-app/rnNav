'use strict';

import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Nav from './Nav';

class App extends Component {
	render() {
		console.log(this.state);
		return (
			<View style={styles.container}>
				<StatusBar
					barStyle='light-content'
					hidden={false}
					showHideTransition='fade'
					animated={true}
				/>
				<Nav/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	text: {
		color: 'red',
	},
});

export default App