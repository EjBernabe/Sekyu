import React from 'react';
import { Text, Tab, Content } from 'native-base';

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