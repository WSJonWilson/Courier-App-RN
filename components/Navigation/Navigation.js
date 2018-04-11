import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from "react-native";
import SignIn from '../Login/SignIn';
import Home from '../Dashboard/Home';
import Settings from '../Dashboard/Settings';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems, SwitchNavigator, TabNavigator, SafeAreaView  } from 'react-navigation';


export const SignedOut = StackNavigator({
    SignIn: {
      screen: SignIn 
    },
    Home: { 
      screen: Home 
    },
  },

  {
    headerMode: 'none',
  }
  );

export const SignedIn = DrawerNavigator(
    {
      Home: {
        screen: Home,
      },

      Settings: {
        screen: Settings,

      }
    },
    {
      initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
    });


export const CustomDrawerContentComponent = (props) => (

      <Container>
        <Header style={styles.drawerHeader}>
          <Body>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props} />
        </Content>
    
      </Container>
    
    );

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    { 
    SignedIn: {
      screen: SignedIn
      
    },
    SignedOut: {
      screen: SignedOut
    }
  },
{
  initialRouteName: signedIn ? "SignedIn" : "SignedOut"
}
);
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
