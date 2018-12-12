import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class WithoutID extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>WithoutID</Text>
                </Content>
            </Container>
        )
    }
};

export default WithoutID;