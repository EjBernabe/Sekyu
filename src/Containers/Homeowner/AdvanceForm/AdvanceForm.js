import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Button, Content, Text, Icon, 
            Card, CardItem, Body, Picker, Item, 
                Textarea, DatePicker, Toast, Root,
                    Header, Left, Title } from "native-base";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { advVisitorChanged, advDateChanged, advNoteChanged, 
            submitForm, resetForm } from '../../../Actions';
import InputField from '../../../Components/InputComponents/InputField/InputField';
import LoaderSpinner from '../../../Components/InputComponents/LoaderSpinner/LoaderSpinner';

const today = new Date();
const MONTH = today.getMonth();
const DAY = today.getDate();
const YEAR = today.getFullYear();

class AdvanceForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = { 
            showToast: false
        };

        this.setDate = this.setDate.bind(this);
    }

    componentDidUpdate () {
        if ( this.props.success ){
            Alert.alert(
                'Visitor added successfully!',
                'Do you want to view all listed visitors?',
                [
                {text: 'Yes', onPress: () => this.resetFormHandler("Yes")},
                {text: 'Cancel', onPress: () => this.resetFormHandler("No"), style: 'cancel'},
                ],
                { cancelable: false }
            )
        }

        if ( this.props.error != '') {
            Alert.alert( 'Error!', 'Something went wrong. Try again.', [{ text: 'Okay', onPress: () => this.resetFormHandler("No") }], { cancelable: false })
        }
    }

    resetFormHandler ( val ) {
        this.props.resetForm();

        if ( val == "Yes" ) 
            Actions.AdvancedList();
        else if ( val == "No")
            Actions.refresh();
    }

    setDate = ( value ) => { this.props.advDateChanged( value.toLocaleDateString("en-US") ); }

    onVisitorChange = ( text ) => { this.props.advVisitorChanged(text); }

    onNoteChange = ( text ) => { this.props.advNoteChanged(text) ;}

    submitForm = () => { 
        const { advVisitor, advDate, advNote, advStatus } = this.props;
        this.props.submitForm({ advVisitor, advDate, advNote, advStatus });
    }

    renderButton () {
        if ( this.props.loading ) {
            return <LoaderSpinner size="large" />
        }
        
        return (
            <Button full onPress={ this.submitForm }>
                <Text>SUBMIT</Text>
            </Button>
        )
    }

    render () {
        return (
            <Root>
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
                                    
                                    <Text>Additional Note</Text>
                                    <Textarea bordered rowSpan={5} 
                                        value={ this.props.advNote }
                                        onChangeText={ this.onNoteChange.bind(this) }
                                    />

                                    <Text>Date</Text>
                                    <DatePicker
                                        defaultDate={new Date(YEAR, MONTH, DAY)}
                                        minimumDate={new Date(YEAR, MONTH, DAY)}
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

                            { this.renderButton() }
                        </Card>
                    </Content>
                </Container>
            </Root>
        );
    }
};

const mapStateToProps = ({ advForm }) => {
    const { advVisitor, advDate, advNote, advStatus, 
                success, error, loading } = advForm;

    return { advVisitor, advDate, advNote, advStatus, 
                success, error, loading };
}

export default connect(mapStateToProps, {
    advVisitorChanged, advDateChanged, advNoteChanged, submitForm, resetForm
})(AdvanceForm);
