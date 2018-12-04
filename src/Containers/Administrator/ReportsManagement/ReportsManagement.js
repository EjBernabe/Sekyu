import React, { Component} from 'react';
import { Container, Content, Text } from 'native-base';

import Aux from '../../Layout/Aux';
import HeaderBar from '../../../Components/HeaderBar/HeaderBar';

class ReportsManagement extends Component {
    render() {
        return (
            <Aux>
                {/* <HeaderBar title={"Reports"} endTitle={"Back"} /> */}
                <Content><Text>Reports Management Module</Text></Content>
            </Aux>
        )
    }
};

export default ReportsManagement;