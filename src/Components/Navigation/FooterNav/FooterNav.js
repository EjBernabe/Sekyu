import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

class FooterNav extends Component {
    state = { selected: 3 }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button 
                        active={this.state.selected === 1} 
                        onPress={() => this.setState({ selected: 1 })}>
                        <Text>Homeowners</Text>
                    </Button>
                    <Button 
                        active={this.state.selected === 2} 
                        onPress={() => this.setState({ selected: 2 })}>
                        <Text>Personnel</Text>
                    </Button>
                </FooterTab>
            </Footer>
        
        );
    }
}

export default FooterNav;