import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

import Auxi from '../../../Containers/Layout/Auxi';
import TabBarOption from './TabBarOption/TabBarOption';

class TabBarOptions extends Component {
    render() {
        return(
            <Auxi>
                <Tabs onChangeTab={({i}) => alert(i)}>
                    <TabBarOption heading={'Homeowner'} />
                    <TabBarOption heading={'Personnel'} />
                </Tabs>
            </Auxi>
        );
    };
};

export default TabBarOptions;