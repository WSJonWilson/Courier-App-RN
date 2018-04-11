import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Card, FormLabel, FormInput} from 'react-native-elements';
import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


export default class Settings extends React.Component {

  render() {
    return (

<Container>
        <CustomHeader title="Settings" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Log Out">  
        <Text style={{ color: 'white' }}>Logout</Text>
              </Button>   

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Go To Home"
        onPress={() => this.props.navigation.navigate('Home')} full>
      <Text style={{ color: 'white' }}>Go To home Screen</Text>
      </Button>
                </Content>
</Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})