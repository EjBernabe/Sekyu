import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

import AuxLayout from '../../../Containers/Layout/AuxLayout';
import TabBarOption from './TabBarOption/TabBarOption';

class TabBarOptions extends Component {
    render() {
        return(
            <AuxLayout>
                <Tabs onChangeTab={({i}) => alert(i)}>
                    <TabBarOption heading={'Homeowner'} />
                    <TabBarOption heading={'Personnel'} />
                </Tabs>
            </AuxLayout>
        );
    };
};

export default TabBarOptions;