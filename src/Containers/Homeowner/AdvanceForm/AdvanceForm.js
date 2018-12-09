import React, { Component } from 'react';
import { Container, Button, Content, Text, Icon, 
            Card, CardItem, Body, Picker, Item, 
                Textarea, DatePicker } from "native-base";
import { View } from 'react-native';
import { connect } from 'react-redux';

import { advVisitorChanged, advVisiteeChanged, 
            advDateChanged, advNoteChanged, submitForm } from '../../../Actions';
import InputField from '../../../Components/InputComponents/InputField/InputField';

const today = new Date();
const MONTH = today.getMonth();
const DAY = today.getDate();
const YEAR = today.getFullYear();

class AdvanceForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            visiteeOptions: ['Visitee 1', 'Visitee 2']
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate = ( value ) => { this.props.advDateChanged( value.toLocaleDateString("en-US") ); }

    onVisiteeChange = ( value ) => { this.props.advVisiteeChanged(value); }

    onVisitorChange = ( text ) => { this.props.advVisitorChanged(text); }

    onNoteChange = ( text ) => { this.props.advNoteChanged(text) ;}


    submitForm = () => { 
        const { advVisitor, advVisitee, advDate, advNote } = this.props;
        this.props.submitForm({ advVisitor, advVisitee, advDate, advNote });
    }

    render () {
        const visiteePickerOutput = this.state.visiteeOptions.map((visiteeOption, i) =>
            <Picker.Item key={i} value={i} label={visiteeOption} />);

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem style={{ backgroundColor: "blue" }}>
                            <Body style={{ alignItems: "center" }}>
                                <Text style={{ color: "white" }}>ADVANCE VISITOR FORM</Text>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Content>
                                <InputField 
                                    label={"Visitor's Name"} 
                                    value={ this.props.advVisitor }
                                    onChangeText={ this.onVisitorChange.bind(this) }/>
                                <Item picker>
                                    <Text>Visitee</Text>
                                    <Picker 
                                        mode="dropdown"
                                        selectedValue={ this.props.advVisitee }
                                        onValueChange={ this.onVisiteeChange.bind(this) }>
                                    { visiteePickerOutput }    
                                    </Picker>
                                </Item>
                                
                                <Text>Additional Note</Text>
                                <Textarea bordered rowSpan={5} 
                                    value={ this.props.advNote }
                                    onChangeText={ this.onNoteChange.bind(this) }
                                />

                                <Text>Date</Text>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(YEAR, MONTH, DAY)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    format="MM/DD/YYYY"
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                    />
                            </Content>
                        </CardItem>
                        <Button full onPress={ this.submitForm }>
                            <Text>SUBMIT</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        );
    }
};

const mapStateToProps = ({ advForm }) => {
    const { advVisitor, advVisitee, advDate, advNote, error, loading } = advForm;

    return { advVisitor, advVisitee, advDate, advNote, error, loading };
}

export default connect(mapStateToProps, {
    advVisitorChanged, advVisiteeChanged, advDateChanged, advNoteChanged, submitForm
})(AdvanceForm);