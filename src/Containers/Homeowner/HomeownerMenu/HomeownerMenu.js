import React, { Component } from 'react';
import { Text, Content, List, ListItem, Icon, Left, Body, Button } from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeownerMenu extends Component {
    render () {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, backgroundColor: '#3F51B5', 
                                justifyContent: 'center', alignItems: 'center'}}>

                    <Button transparent style={{ alignSelf: 'center' }}>
                        <Icon 
                            type="MaterialIcons"
                            name="account-circle" 
                            style={{ fontSize: 100, color: "#000" }}/>
                    </Button>

                    <Text style={{ marginTop: 30 }}>NAME NIYA</Text>
                </View>

                <View style={{ flex: 2 }}>
                    <Content>
                        <List>
                            <ListItem icon onPress={() => Actions.HomeownerHome()}>
                                <Left>
                                    <Button transparent>
                                        <Icon 
                                            type="MaterialIcons"
                                            name="home" 
                                            style={{ fontSize: 30, color: "#000" }}/>
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Home</Text>
                                </Body>
                            </ListItem>
                            
                            <ListItem icon>
                                <Left>
                                    <Button transparent>
                                        <Icon 
                                            type="Ionicons"
                                            name="ios-people" 
                                            style={{ fontSize: 30, color: "#000" }}/>
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Household Members</Text>
                                </Body>
                            </ListItem>
                            
                            <ListItem icon>
                                <Left>
                                    <Button transparent>
                                        <Icon 
                                            type="FontAwesome"
                                            name="files-o" 
                                            style={{ fontSize: 27, color: "#000" }}/>
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Visitor Logs</Text>
                                </Body>
                            </ListItem>
                            
                            <ListItem icon onPress={() => Actions.Login()}>
                                <Left>
                                    <Button transparent>
                                        <Icon 
                                            type="SimpleLineIcons"
                                            name="logout" 
                                            style={{ fontSize: 27, color: "#000" }}/>
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Logout</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View>
        );
    };
};

export default HomeownerMenu;