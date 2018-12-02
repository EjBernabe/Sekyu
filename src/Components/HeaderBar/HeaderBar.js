import React from "react";
import { Container, Header, Title, Content, Button, 
            Icon, Left, Right, Body, Text } from "native-base";

const HeaderBar = ( props ) => {    
    let noBackButton = ( props.noBackButton != null ) ? props.noBackButton : true;
    let hasTabs = ( props.hasTabs == null ) ? false : true;
    
    return (
        <Header noLeft={ noBackButton } hasTabs={ hasTabs }>
            <Left>
                <Button transparent onPress={ props.backButtonPressed }>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>{ props.title }</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Text onPress={ props.clicked }>{ props.endTitle }</Text>
                </Button>
            </Right>
        </Header>
    );
}

export default HeaderBar;