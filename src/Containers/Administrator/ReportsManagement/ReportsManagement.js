import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';

import AuxLayout from '../../Layout/AuxLayout';
import HeaderBar from '../../../Components/HeaderBar/HeaderBar';

class ReportsManagement extends Component {
    render() {
        return (
            <AuxLayout>
                {/* <HeaderBar title={"Reports"} endTitle={"Back"} /> */}
                <Content><Text>Reports Management Module</Text></Content>
            </AuxLayout>
        )
    }
};

export default ReportsManagement;