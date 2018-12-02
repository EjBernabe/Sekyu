import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Auxi from '../../Layout/Auxi';
import HeaderBar from '../../../Components/HeaderBar/HeaderBar';

class VehiclesManagement extends Component {
    render() {
        return (
            <Container>
                <HeaderBar 
                    prevScene={"Admin Home"}
                    noBackButton={false}
                    backButtonPressed={() => Actions.adminScene()}
                    endTitle={"Add Car"}
                    clicked={() => alert('Add Car is clicked')} />
            </Container>
        )
    }
};

export default VehiclesManagement;