import React, { Component } from 'react';
import { Container, Content, Form, Text, Picker, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import InputField from '../../../../../Components/InputComponents/InputField/InputField';

import Auxi from '../../../../../Containers/Layout/Auxi';

class HomeownerInputs extends Component {
    state = {
        buildingInput: '',
        unitInput: ''
    };

    render () {

        return (
            <Auxi>
                <InputField key={'Building'} label={'Building'} />
                <InputField key={'Unit'} label={'Unit/House No.'} />
            </Auxi>
        );
    }
}

export default HomeownerInputs;