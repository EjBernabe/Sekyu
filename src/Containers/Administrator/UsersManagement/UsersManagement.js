import React, { Component} from 'react';
import { Container, Content, Button, Text, ActionSheet, Root } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AuxLayout from '../../Layout/AuxLayout';
import HeaderBar from '../../../Components/HeaderBar/HeaderBar';
import TabBarOptions from '../../../Components/Navigation/TabBarOptions/TabBarOptions';

var BUTTONS = [ "Manually Input", "Take a Photo of an ID" ];

class UsersManagement extends Component {
    state = {
        actionClicked: []
    };

    newUserOptionHandler = () => {
        ActionSheet.show({
                options: BUTTONS,
                title: "Add User Information: "
            }, buttonIndex => {
                this.setState({ actionClicked: BUTTONS[buttonIndex] });

                if( buttonIndex == 0)
                    Actions.NewUser();
                else
                    alert("TAKING A PHOTO MODULE NEXT");
            });
    };

    render() {
        return (
                <Container>
                    <HeaderBar 
                        prevScene={"Admin Home"}
                        noBackButton={false}
                        hasTabs={true}
                        backButtonPressed={() => Actions.adminScene()}
                        endTitle={"Add User"}
                        clicked={ this.newUserOptionHandler } />
                    <TabBarOptions />
                    <Content>
                        
                    </Content>
                </Container>
        )
    }
};

export default UsersManagement;