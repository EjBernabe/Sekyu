import React, { Component } from 'react';
import { Container, Button, Content, Text, Icon, 
            Card, CardItem, Body, Picker, Item, 
                Textarea, DatePicker, Toast } from "native-base";
import { connect } from 'react-redux';

import { advVisitorChanged, advDateChanged, advNoteChanged, submitForm } from '../../../Actions';
import InputField from '../../../Components/InputComponents/InputField/InputField';
import LoaderSpinner from '../../../Components/InputComponents/LoaderSpinner/LoaderSpinner';

const today = new Date();
const MONTH = today.getMonth();
const DAY = today.getDate();
const YEAR = today.getFullYear();

class AdvanceForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = { showToast: false };

        this.setDate = this.setDate.bind(this);
    }

    setDate = ( value ) => { this.props.advDateChanged( value.toLocaleDateString("en-US") ); }

    onVisitorChange = ( text ) => { this.props.advVisitorChanged(text); }

    onNoteChange = ( text ) => { this.props.advNoteChanged(text) ;}

    submitForm = () => { 
        const { advVisitor, advDate, advNote, advStatus } = this.props;
        this.props.submitForm({ advVisitor, advDate, advNote, advStatus });
    }

    componentDidMount () {
        if ( this.props.success ) {
            Toast.show({
                text: "Added New Visitor!",
                buttonText: "Okay",
                type: "success"
            });
        }
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
        );
    }
};

const mapStateToProps = ({ advForm }) => {
    const { advVisitor, advDate, advNote, advStatus, success, error, loading } = advForm;

    return { advVisitor, advDate, advNote, advStatus, success, error, loading };
}

export default connect(mapStateToProps, {
    advVisitorChanged, advDateChanged, advNoteChanged, submitForm
})(AdvanceForm);