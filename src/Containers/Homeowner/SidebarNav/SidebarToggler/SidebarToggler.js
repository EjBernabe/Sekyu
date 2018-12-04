import React, { Component } from 'react';
import { Container, Content, Header, Left, Button, Icon, Right, Body, Title, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

class SidebarToggler extends Component {
    logoutHandler = () => {
        alert("You will be logged out now.");
        // Actions.appScene();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>this.props.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Homeowner</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text onPress={ this.logoutHandler }>Logout</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>asda1123sd</Text>
                </Content>
            </Container>
        );
    }
}

export default SidebarToggler;