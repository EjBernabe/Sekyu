// Importing a library to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/configureStore';
import Router from './src/Router';

const store = configureStore();
// Creating a component
class App extends Component {
    render () {
        return (
            <Provider store={ store }>
                <Router/>
            </Provider>
        );
    };
};

// Render it to the device
AppRegistry.registerComponent('sekyu', () => App);
