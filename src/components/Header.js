import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#eeeeee',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2},
        elevation: 2
    },
    text: {
        fontSize: 25
    }
})

class Header extends Component {
    render() {
      return (
        <View style={ style.container }>
          <Text style={ style.text }>
              { this.props.title}
          </Text>
        </View>
      )
    }
  }
  export default Header;