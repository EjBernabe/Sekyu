import React, { Component } from 'react';
import { Container, Button, Content, Text, 
            Icon, Tab, Tabs, TabHeading, Badge,
                Drawer } from "native-base";
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import Aux from '../Layout/Aux';
import AdvanceForm from './AdvanceForm/AdvanceForm';
import VisitorsList from './VisitorsList/VisitorsList';
import HeaderbarNav from './HeaderbarNav/HeaderbarNav';

class Homeowner extends Component {
    logoutHandler = () => {
        alert("You will be logged out now.");
        Actions.appScene();
    }

    render () {
        return (
            <Container>
                {/* <HeaderbarNav /> */}
                <HeaderBar 
                    title={'Homeowner'} 
                    endTitle={'Logout'}
                    clicked={ this.logoutHandler } />
                    
                <Content padder>
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="ios-people" /></TabHeading>}>
                            <AdvanceForm />
                        </Tab>
                        <Tab heading={ 
                            <TabHeading>
                                <Icon name="notifications" />
                                <Badge style={{ position: 'relative' }}><Text>2</Text></Badge>
                            </TabHeading>}>
                            <VisitorsList />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        ); 
    }
}

export default Homeowner;