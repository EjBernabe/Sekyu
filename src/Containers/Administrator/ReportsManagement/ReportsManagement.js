import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';

import Auxi from '../../Layout/Auxi';
import HeaderBar from '../../../Components/HeaderBar/HeaderBar';

class ReportsManagement extends Component {
    render() {
        return (
            <Auxi>
                {/* <HeaderBar title={"Reports"} endTitle={"Back"} /> */}
                <Content><Text>Reports Management Module</Text></Content>
            </Auxi>
        )
    }
};

export default ReportsManagement;