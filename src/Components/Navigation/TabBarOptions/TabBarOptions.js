import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

import Aux from '../../../Containers/Layout/Aux';
import TabBarOption from './TabBarOption/TabBarOption';

class TabBarOptions extends Component {
    render() {
        return(
            <Aux>
                <Tabs onChangeTab={({i}) => alert(i)}>
                    <TabBarOption heading={'Homeowner'} />
                    <TabBarOption heading={'Personnel'} />
                </Tabs>
            </Aux>
        );
    };
};

export default TabBarOptions;