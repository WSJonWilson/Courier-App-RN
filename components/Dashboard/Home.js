import React, { Component }  from "react";
import { ScrollView, Text, StyleSheet, FlatList, Linking, View } from "react-native";
import { Icon, Button, Container, Header, Content, Left} from 'native-base';
import { Card } from "react-native-elements";
import {DrawerNavigator} from 'react-navigation';

export default class Home extends Component{

  render(){
    return(
      <Container>
          <Content>
              <Text>HomeScreen</Text>
            </Content>
        </Container>
    );
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
