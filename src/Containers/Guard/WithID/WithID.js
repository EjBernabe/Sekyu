import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class WithID extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>WithID</Text>
                </Content>
            </Container>
        )
    }
};

export default WithID;