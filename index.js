// Importing a library to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Router from './src/Router';

// Creating a component
class App extends Component {
    render () {
        return (
            <Router />
        );
    };
};

// Render it to the device
AppRegistry.registerComponent('sekyu', () => App);
