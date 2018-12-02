import React from 'react';
import { Text, Tab, Content } from 'native-base';

import Auxi from '../../../../Containers/Layout/Auxi';

const TabBarOption = ( props ) => {
    return (
        <Tab heading={ props.heading }>
            <Content padder>
                <Text>Content: { props.heading }</Text>
            </Content>
        </Tab>
    );
}

export default TabBarOption;