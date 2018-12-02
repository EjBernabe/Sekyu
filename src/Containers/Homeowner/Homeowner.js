import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Content, Card, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import CardButton from '../../Components/CardButton/CardButton';
import Auxi from '../Layout/Auxi';

class Homeowner extends Component {
    logoutHandler = () => {
        alert("You will be logged out now.");
        Actions.appScene();
    }

    render () {
        return (
            <Auxi>
                <HeaderBar 
                    title={'Homeowner'} 
                    endTitle={'Logout'}
                    clicked={ this.logoutHandler } />
            </Auxi>
        ); 
    }
}

export default Homeowner;