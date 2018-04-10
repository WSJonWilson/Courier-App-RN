
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';

 
export default class Login extends Component{

    render(){
            const { navigate } = this.props.navigation; 
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

<KeyboardAvoidingView behavior="padding">
            
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
                             title= 'Log In'
                             onPress={() => this.props.navigation.navigate('HomeScreen')}           />
            </KeyboardAvoidingView>

            </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1, 
        backgroundColor: '#4b6584',
        alignItems: 'center',
        justifyContent: 'center',
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