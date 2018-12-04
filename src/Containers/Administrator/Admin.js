// Importing a library to help create a component
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Content, Card } from 'native-base';
import { Actions } from 'react-native-router-flux';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import CardButton from '../../Components/CardButton/CardButton';
import AuxLayout from '../Layout/AuxLayout';

const data = require('../../Containers/Administrator/Modules.json');
// Make a component
class Admin extends Component {
    state = {
        cards: []
    };

    componentWillMount() {
        this.setState({ cards: data });
    };

    navigateHandler = ( navKey ) => {
        switch ( navKey ){
            case 'Users':
                Actions.usersMgmtScene();
                break;
            case 'Vehicles':
                Actions.vehiclesMgmtScene();
                break;
            case 'Reports':
                Actions.reportsMgmtScene();
                break;
        }
    }

    logoutHandler = () => {
        alert("You will be logged out now.");
        Actions.appScene();
    }

    render() {
        const cardsOutput = this.state.cards.map(card => 
            <CardButton 
                key={card.key}
                title={card.title} 
                imageName={card.image}
                clicked={() => this.navigateHandler(card.key)} />);

        return (
            <AuxLayout>
                <HeaderBar 
                    title={'Administrator'} 
                    endTitle={'Logout'}
                    clicked={ this.logoutHandler } />
                <Content>{cardsOutput}</Content>
            </AuxLayout>
        );    
    };
};

// Make the component available to other parts of the Application
export default Admin;