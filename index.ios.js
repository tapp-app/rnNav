'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './App';

class Root extends Component {
	render() {
		return (
			<App/>
		);
	}
}

AppRegistry.registerComponent('rnNav', () => Root);