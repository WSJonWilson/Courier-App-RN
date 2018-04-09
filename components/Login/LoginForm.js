import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar
                barStyle="light-content">
                </StatusBar>
                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="next"
                    style={styles.input}
                    />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    />
                    <Button 
                            onPress = {() =>
                            this.props.navigation.navigate('Home')}
                            style={styles.buttonContainer}
                            title="Login"
                    />
            </KeyboardAvoidingView>
        );
    }
}

AppRegistry.registerComponent('LoginForm', () => LoginForm);

const styles =StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'stretch'

   
    },
    input: {
        height: 40,
        width: 200,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 10
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})
