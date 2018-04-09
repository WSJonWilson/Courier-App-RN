
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginForm from'../Login/LoginForm';
 
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/avatar.png')}
                />
                </View>
                <View>
                                <Text style={styles.logoTitle}>Courier App (TEST)</Text>
                </View>
            <View style={styles.formContainer}>
            <LoginForm />
            </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#4b6584',
        alignItems: 'stretch',
        paddingLeft: 120,
        paddingRight: 120,
        paddingVertical: 40

    },
    logo:{
        width: 100,
        height: 100,
        borderRadius: 10,
        position: 'absolute',
        paddingBottom: 30
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logoTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(225,225,225,0.7)'
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
     

})