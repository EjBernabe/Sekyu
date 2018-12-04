import React, { Component } from 'react';
import { Text, Container, Content, List, ListItem } from 'native-base';
import { View } from 'react-native';

class SidebarNav extends Component {
    render () {
        return (
            <Content style={{backgroundColor: 'white'}}>
                <List>
                    <ListItem>
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                </List>        
            </Content>
      );
    };
};

export default SidebarNav;