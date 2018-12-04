import React, { Component } from 'react';
import { Container, Content, Form, Text, Picker, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import InputField from '../../../../../Components/InputComponents/InputField/InputField';

import Aux from '../../../../../Containers/Layout/Aux';

class HomeownerInputs extends Component {
    state = {
        buildingInput: '',
        unitInput: ''
    };

    render () {

        return (
            <Aux>
                <InputField key={'Building'} label={'Building'} />
                <InputField key={'Unit'} label={'Unit/House No.'} />
            </Aux>
        );
    }
}

export default HomeownerInputs;