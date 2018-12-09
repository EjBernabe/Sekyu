import React, { Component } from 'react';
import { Container, Button, Content, Accordion, Text, Icon, Tab, Tabs } from "native-base";
import { View } from 'react-native';

const dataArray = [
    { 
        key: "0",
        name: "Name 1", 
        content: "Visitee Name 1" 
    },
    { 
        key: "1",
        name: "Name 2", 
        content: "Visitee Name 2"
    }
];

function acceptVisitor ( key ){
    alert("Accept: " + key);
}

function denyVisitor ( key ){
    alert("Deny: " + key);
}

class VisitorsList extends Component {
    _renderHeader(dataArray, expanded) {
        return (
            <View style={{ 
                flexDirection: "row", 
                padding: 10, 
                justifyContent: "space-between", 
                alignItems: "center", 
                backgroundColor: "#A9DAD6" }} >
                <Text>
                    <Text style={{ fontWeight: "600" }}>
                        {"Visitor is Waiting: \n"}
                    </Text>
                    <Text note
                        style={{ color: "red", fontSize: 17 }}>{dataArray.name}</Text>
                </Text>
                {expanded
                ? <Icon style={{ fontSize: 18 }} name="arrow-back" />
                : <Icon style={{ fontSize: 18 }} name="arrow-forward" />}
            </View>
        );
    }

    _renderContent(dataArray) {
        return (
            <Content 
                style={{ 
                    backgroundColor: "#e3f1f1", 
                    padding: 10 }}>
                <Text>
                    <Text>
                        {"Arrival Time: "}
                        {"\n"}
                    </Text>
                    <Text>
                        {"For Mr/Mrs.:  "}
                        {"\n"}
                    </Text>
                </Text>
                <View style={{flexDirection: "row", alignSelf: "center"}}>
                    <Button transparent success onPress={() => acceptVisitor(dataArray.key)}>
                    {/* <Button transparent success> */}
                        <Text>Accept</Text>
                    </Button>
                    <Button transparent danger onPress={() => denyVisitor(dataArray.key)}>
                    {/* <Button transparent danger > */}
                        <Text>Deny</Text>
                    </Button>
                </View>
            </Content>
        );
    }

    render () {
        return (
            <Container>
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
            </Container>
        ); 
    }
}

export default VisitorsList;