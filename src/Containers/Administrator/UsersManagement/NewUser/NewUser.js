import React, { Component } from 'react';
import { Container, Content, Form, Text, Picker, Item,
            Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { newNormalTextInfo } from '../../../../Actions';
import AuxLayout from '../../../Layout/AuxLayout';
import HeaderBar from '../../../../Components/HeaderBar/HeaderBar';
import InputField from '../../../../Components/InputComponents/InputField/InputField';
import PersonnelInputs from './PersonnelInputs/PersonnelInputs';
import HomeownerInputs from './HomeownerInputs/HomeownerInputs';

class NewUser extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            userTypeFlag: false,
            userTypeSelected: undefined,
            userTypeOptions: ['Choose One', 'Homeowner', 'Personnel'],
            
            generalInputs: ['Name', 'Email Address', 'Contact/Mobile/Tel No.'],
            generalArr: [],

            newInfoHandlers: ['NEW_NAME_CHANGED', 'NEW_EMAIL_CHANGED', 'NEW_CONTACT_CHANGED']

        };
    }

    changeUserTypeSelectedHandler( value ) {
        this.setState({ userTypeSelected: value });
        if ( value != this.state.userTypeOptions[0] )
            this.setState({ userTypeFlag: true });
    }

    additionalInputsOutput () {
        const userType = this.state.userTypeSelected;

        if ( this.state.userTypeFlag ){
            switch (userType) {
                case 1: 
                    return <HomeownerInputs />
                case 2:
                    return <PersonnelInputs />
                default:
                    return <Text>{''}</Text>
            }
        }
    }

    clickedSaveButtonHandler = () => {
        // const generalArr = [ ...this.state.generalArr ];
        console.log(generalArr);
    }

    onNormalChange( index, text ){
        alert( index );
    }

    render () {
        // const generalInputsOutput = this.state.generalInputs.map((generalInput, i) => 
        //     <InputField key={ i } label={ generalInput } value={ this.state.generalArr[i] }
        //         onChangeText={ (generalText) => {
        //             this.setState({
        //                 generalArr: [ 
        //                     ...this.state.generalArr.slice(0, i),
        //                     generalText,
        //                     ...this.state.generalArr.slice(i+1, this.state.generalArr.length) 
        //                 ]
        //             });
        //         }}
        //     />);
        
        const generalInputsOutput = this.state.generalInputs.map((generalInput, i) => 
            <InputField key={ i } label={ generalInput } 
                onChangeText={ (val) => {this.onNormalChange(i, val) }} />);
        
        const userTypePickerOutput = this.state.userTypeOptions.map((userTypeOption, i) =>
            <Picker.Item key={i} value={i} label={userTypeOption} />);

        return (
                <Container>
                    <HeaderBar 
                        prevScene={"User Mgmt."}
                        noBackButton={false}
                        backButtonPressed={() => Actions.usersMgmtScene()}
                        endTitle={"Save"}
                        clicked={ this.clickedSaveButtonHandler } />
                    <Content>
                        {/* <Form> */}
                        <Content style={ styles.FormContainer }>
                            { generalInputsOutput }
                            <Item picker>
                                <Text>User Type</Text>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.userTypeSelected}
                                    onValueChange={this.changeUserTypeSelectedHandler.bind(this)} >
                                    { userTypePickerOutput }
                                </Picker>
                            </Item>
                            { this.additionalInputsOutput() }
                        {/* </Form> */}
                        </Content>
                    </Content>
                </Container>
        );
    };
};

const styles = {
    FormContainer: {
        padding: '5%'
    }
}
// export default NewUser;
const mapStateToProps = ({ newUser }) => {
    const { name, email, contact } = newUser;

    return { name, email, contact };
};

export default connect(mapStateToProps, {
    newNormalTextInfo
})(NewUser);