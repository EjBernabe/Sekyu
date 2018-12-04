import React from "react";
import { Image, TouchableWithoutFeedback, Alert } from 'react-native';
import {  Container, Header, Content, Card, CardItem, 
            Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";

import AuxLayout from '../../Containers/Layout/AuxLayout';

const CardButton = ( props ) => {
    return (
            <AuxLayout>
                <Card>
                    <CardItem button onPress={ props.clicked }>
                        <Left>
                            <Body>
                                <Text>{ props.title }</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody button onPress={ props.clicked }>
                        <Image 
                            source={ require('../../Assets/images/img_blue_users.png') } 
                            resizeMode="contain"
                            style={{height: 200, width: null, flex: 1}} />
                    </CardItem>
                </Card>
            </AuxLayout>
    );
    
}

export default CardButton;