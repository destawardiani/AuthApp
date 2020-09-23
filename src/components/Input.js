import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Input extends Component {
    render() {
        const {
            label,
            placeholder,
            secureTextEnrty,
        } = this.props
    
        return (
        <View>
            <Text>
                { label }
            </Text>
            <TextInput 
                placeholder={ placeholder }
                secureTextEntry={ secureTextEnrty }
                autoCorrect={ false } />
        </View>
        );
    }
}

export default Input;