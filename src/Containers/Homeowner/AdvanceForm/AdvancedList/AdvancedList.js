import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Button, Content, Text, Icon, 
            Card, CardItem, Body, Picker, Item, 
                Textarea, DatePicker, Toast, Root,
                    Header, Left, Title, Accordion, ListItem } from "native-base";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { expectedVisitorsFetch } from '../../../../Actions';
// import { } from '../../../../Actions';
import LoaderSpinner from '../../../../Components/InputComponents/LoaderSpinner/LoaderSpinner';

const today = new Date();
const MONTH = today.getMonth();
const DAY = today.getDate();
const YEAR = today.getFullYear();

class AdvancedList extends Component {
    constructor ( props ) {
        super( props );
    }

    componentWillMount () {
        this.props.expectedVisitorsFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps ( nextProps ) {
        this.createDataSource(nextProps);
    }

    createDataSource ({ expectedVisitors }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows( expectedVisitors );
    }

    renderRow ( expectedVisitor ) {
        // return <ListItem expectedVisitor={expectedVisitor} />;
    }

    render () {
        console.log(this.props);
        return (
            <Root>
                <Container>
                    <Content padder>
                        {/* <ListView 
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        /> */}
                    </Content>
                </Container>
            </Root>
        )
    }
}


const mapStateToProps = state => {
    const expectedVisitors = _.map(state.expectedVisitors, (val, uid) => {
        return { ...val, uid };
    });

    return { expectedVisitors };
};

export default connect(mapStateToProps, {
    expectedVisitorsFetch
})(AdvancedList);
