/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';



import Login from './components/Login/Login';
import Home from './components/Dashboard/Home';
import Screen1 from './components/Dashboard/DrawScreen1';


export const App = StackNavigator({
  LoginScreen: {screen: Login },
  HomeScreen: { screen: Home },
},
{
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
}
);

export const Drawer = DrawerNavigator({
  HomeScreen: {
      screen: Home
  },
  DrawScreen1: {
    screen: Screen1
  }
})

