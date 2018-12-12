import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class WithVehicles extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>WithVehicles</Text>
                </Content>
            </Container>
        )
    }
};

export default WithVehicles;