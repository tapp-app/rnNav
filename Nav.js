'use strict';

import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	Text,
	View,
} from 'react-native';

import Hello from './Hello';
import Info from './Info';

var NavigationBarRouteMapper = {
	LeftButton: function(route, navigator, index, navState) {
		// console.log(route);
		return (
			<TouchableHighlight
				onPress={() => { if (index > 0) { navigator.pop(); } }}
				underlayColor='transparent'
				style={styles.navBarLeftButton}
			>
				<Text
					style={[styles.navBarText, styles.navBarButtonText]}
				>
					{ route.prevRoute }
				</Text>
			</TouchableHighlight>
		);
	},
	Title: function(route, navigator, index, navState) {
		// console.log(route);
		return (
			<Text
				style={[styles.navBarText, styles.navBarTitle]}
			>
				{ route.title }
			</Text>
		);
	},
	RightButton: function(route, navigator, index, navState) {
		// console.log(route);
		return (
			<TouchableHighlight
				// TODO: Add onPress to handle right button action
				underlayColor='transparent'
				style={styles.navBarRightButton}
			>
				<Text
					style={[styles.navBarText, styles.navBarButtonText]}
				>
					{ route.nextRoute }
				</Text>
			</TouchableHighlight>
		);
	},
}

class Nav extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{
					id: 'hello',
					title: 'Hello'
				}}
				renderScene={this.renderScene}
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={NavigationBarRouteMapper}
						style={styles.navBar}
					/>
				}
			/>
		);
	}

	renderScene(route, navigator) {
		// console.log(route);
		switch (route.id) {
		case 'hello':
			return (
				<Hello
					{...route.passProps}
					navigator={navigator}
				/>
			);
		case 'info':
			return (
				<Info
					{...route.passProps}
					navigator={navigator}
				/>
			);
		default:
			return (
				<Hello
					{...route.passProps}
					navigator={navigator}
				/>
			);
		}
	}
}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: '#33CC00',
	},
	navBarText: {
		color: '#FFF',
	},
	navBarTitle: {
		fontSize: 20,
		marginVertical: 7,
	},
	navBarLeftButton: {
		paddingLeft: 10
	},
	navBarRightButton: {
		paddingRight: 10
	},
	navBarButtonText: {
		fontSize: 16,
		marginVertical: 10,
	},
});

export default Nav