import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Spinner extends Component {
    render() {
        return (
            <View style={ style.container }>
                <ActivityIndicator size="large" color="#007aff" />
            </View>
        )
    }
}

export default Spinner;