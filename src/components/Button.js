import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

 const style = StyleSheet.create({
     button: {
         flex: 1,
         alignSelf: 'stretch',
         backgroundColor: 'white',
         borderColor: 'blue',
         borderRadius: 5,
         borderWidth: 1
     },
     text: {
         alignSelf: 'center',
         color: 'blue',
         fontSize: 16,
         fontWeight: '600',
         paddingVertical: 10

     }
 })

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
            style={ style.button }
            onPress={ this.props.onPress }>
            <Text style={ style.text }> 
                {this.props.children }
            </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;