import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/components/Header';
import config from './src/config'
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.lenght) {
      console.log('Init Firebase...');
      firebase.initializeApp(config.firebaseConfig)
    }
  }
  render() {
    return (
      <View>
        <Header title="Authentication" />

        <LoginForm />
      </View>
    );
  }
}

export default App;