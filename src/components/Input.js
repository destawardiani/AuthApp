import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#007aff',
        borderBottomWidth: 1
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        flex: 2,
        color: 'black',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 50,
    },
})

class Input extends Component {
    render() {
        const {
            label,
            placeholder,
            secureTextEnrty,
            value,
            onChangeText,
        } = this.props
    
        return (
        <View style={ style.container }>
            <Text style={ style.label }>
                { label }
            </Text>
            <TextInput
                style={ style.input } 
                placeholder={ placeholder }
                secureTextEntry={ secureTextEnrty }
                autoCorrect={ false }
                value={ value }
                onChangeText={ onChangeText } />
        </View>
        );
    }
}

export default Input;