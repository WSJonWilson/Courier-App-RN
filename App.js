/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
   AppRegistry,
   Platform,
   StyleSheet,
   Text,
   View
} from 'react-native';

import { StackNavigator } from 'react-navigation';


import Login from './components/Login/Login';
import Home from './components/Dashboard/Home';


export default class App extends Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: {screen: Login },
  HomeScreen: { screen: Home }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6'
  }
  
});

AppRegistry.registerComponent('App', () => App);