import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Input from './Input';

class LoginForm extends Component  {
    state = {
        email: '',
        password: '',
        error: ','
    }
    onButtonPress() {
        console.log('Processing Login...');
        const { email, password } = this.state

        this.setState({ error: '' })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then()
            .catch(error => {
                console.log(error.message);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then()
                    .catch(error2 => {
                        console.log(error2.message);
                        this.setState({ error: 'Authentication Failed' })
                    })
                })
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email"
                    placeholder="user@gmail.com"
                    value={ this.props.email}
                    onChangeText={ (email) => this.setState({ email })} />           
                </CardSection>
                <CardSection>
                    <Input label="Password"
                    placeholder="password"
                    secureTextEntry={ true }
                    value={ this.props.password}
                    onChangeText={ (password) => this.setState({ password })} />
                </CardSection>

                <Text style= {{ fontSize:20, alignSelf: 'center', color: 'red' }}>
                    { this.state.error }
                </Text>
                <CardSection>
                    <Button onPress={ () => this.onButtonPress() }>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;