import React, { Component } from "react";
import { ScrollView, Text, Linking, View, StyleSheet, Image } from "react-native";
import { Button, Card, CardItem, Container, Header, Icon, Content, Left, Right } from 'native-base';
import CustomHeader from './CustomHeader';


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: 
                <Icon name="menu" size={20} 
                      style={{ paddingLeft: 10 }}
                      onPress={() => navigation.navigate('DrawerOpen')} 
                />,

    drawerLabel: 'Home'
  })


  render() {
    return (

      <Container>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default Home;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});