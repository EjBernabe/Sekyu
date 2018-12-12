import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { Container, Content, Form, Text, Button,
            Picker, Item, Label, Input, Header, 
                Left, Body, Title, Icon, 
                    Card, CardItem, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AuxLayout from '../../../../../Containers/Layout/AuxLayout';

class PersonnelInputs extends Component {
    state = {
        shiftAlloted: 0,
        modalVisible: false,
        
        shiftDayLabels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                            'Friday', 'Saturday', 'Sunday'],
        shiftTimeArrs: [0, 0, 0, 0, 0, 0, 0],
        shiftTimeOptions: ['None', 'Day', 'Night']
    };

    setModalVisible ( visible ) {
        this.setState({modalVisible: visible});
    }

    countShiftHandler = () => {
        return this.state.shiftTimeArrs.filter( (val) => val > 0 ).length + ' Listed';
    }

    render () {
        // const shiftLabel = this.state.shiftAlloted + ' Listed';
        const shiftLabel = this.state.shiftTimeArrs.filter( (val) => val > 0 ).length + ' Listed';
        return (
            <AuxLayout>
                <Content style={{flex: 1, flexDirection: 'row'}}>
                    <Item stackedLabel>
                        <Label>Shift Alloted</Label>
                        <Input disabled value={ shiftLabel }/>
                    </Item>

                    <Button block info onPress={() => {this.setModalVisible(true)}}>
                        <Text>Edit Shifts</Text>
                    </Button>
                </Content>

                <View style={{marginTop: 22}}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {this.setModalVisible(false)}}>
                        <Container>
                            <Header>
                                <Left>
                                    <Button transparent 
                                        onPress={() => {this.setModalVisible(false)}}>
                                        <Icon name='arrow-back' />
                                    </Button>
                                </Left>
                                <Body>
                                    <Title>Shift Schedules</Title>
                                </Body>
                            </Header>
                            
                            <Content style={{padding: '5%'}}>
                                <View style={{flex: 1, 
                                    alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Content>
                                            <Card>
                                                {
                                                    this.state.shiftDayLabels.map( (shiftDayLabel, index) => {   
                                                        return (
                                                            <CardItem key={index}>
                                                                <Text style={{width: "50%"}}>{shiftDayLabel}</Text>
                                                                <Right>
                                                                    <Item picker>
                                                                        <Picker
                                                                            mode="dropdown"
                                                                            selectedValue={this.state.shiftTimeArrs[index]}
                                                                            onValueChange={(val) => {
                                                                                this.setState({
                                                                                    shiftTimeArrs: [ ...this.state.shiftTimeArrs.slice(0, index),
                                                                                                    val,
                                                                                                    ...this.state.shiftTimeArrs.slice(index+1, this.state.shiftTimeArrs.length) ]
                                                                                });
                                                                            }}>
                                                                        {
                                                                            this.state.shiftTimeOptions.map((shiftTimeOption, j) =>
                                                                            <Picker.Item 
                                                                                style={{width: "50%"}}
                                                                                key={j} 
                                                                                value={j} 
                                                                                label={shiftTimeOption} />)
                                                                        }
                                                                        </Picker>
                                                                    </Item>
                                                                </Right>
                                                            </CardItem>  
                                                        )
                                                    })
                                                }
                                            </Card>
                                        </Content>                    
                                    </View>
                                </View>
                            </Content>
                        </Container>
                    </Modal>
                </View>
            </AuxLayout>
        );
    }
}

export default PersonnelInputs;