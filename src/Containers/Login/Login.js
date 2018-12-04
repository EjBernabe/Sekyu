import React, { Component} from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text, 
            Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../../Actions';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import InputField from '../../Components/InputComponents/InputField/InputField';
import LoaderSpinner from '../../Components/InputComponents/LoaderSpinner/LoaderSpinner';

class Login extends Component {

    loginUser = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    } 

    onEmailChange = ( text ) => { this.props.emailChanged(text); }

    onPasswordChange = ( text ) => { this.props.passwordChanged(text); }

    renderButton () {
        if ( this.props.loading ) {
            return <LoaderSpinner size="large" />
        }

        return (
            <Button full danger onPress={ this.loginUser }>
                <Text>LOGIN HERE</Text>
            </Button>
        );
    }
    render() {
        return (
            <Container>
                <HeaderBar title={'Login'} />
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Body>
                                <InputField 
                                    label={"Username: "}
                                    value={ this.props.email }
                                    onChangeText={ this.onEmailChange.bind(this) } />
                                
                                <InputField 
                                    secureTextEntry
                                    label={"Password: "}
                                    value={ this.props.password }
                                    onChangeText={ this.onPasswordChange.bind(this) } />
                            </Body>
                        </CardItem>
                    </Card>

                    <Content style={{ backgroundColor: 'white' }}>
                        <View>
                            <Text style={ styles.errorTextStyle }>
                                { this.props.error } 
                            </Text>
                        </View>

                        { this.renderButton() }
                    </Content>
                </Content>
            </Container>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        flex: 1,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser, 
})(Login);