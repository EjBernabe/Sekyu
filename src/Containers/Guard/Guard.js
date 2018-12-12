import React, { Component } from 'react';
import { Container, Button, Content, Text, 
            Icon, Tab, Tabs, TabHeading, Badge,
                Drawer } from "native-base";
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import WithoutID from './WithoutID/WithoutID';
import WithID from './WithID/WithID';
import WithVehicles from './WithVehicles/WithVehicles';

class Guard extends Component {
    logoutHandler = () => {
        alert("You will be logged out now.");
        Actions.appScene();
    }

    render () {
        return (
            <Container>
                {/* <HeaderbarNav /> */}
                <HeaderBar 
                    title={'Guard'} 
                    endTitle={'Logout'}
                    hasTabs={true}
                    clicked={ this.logoutHandler } />
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="ios-walk" /></TabHeading>}>
                            <WithoutID />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-person" /></TabHeading>}>
                            <WithID />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="md-car" /></TabHeading>}>
                            <WithVehicles />
                        </Tab>
                    </Tabs>
            </Container>
        ); 
    }
}

export default Guard;