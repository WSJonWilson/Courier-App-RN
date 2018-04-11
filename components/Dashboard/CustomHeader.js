import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Button, Title, Content, Left,Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


class CustomHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Icon name="menu" size={20}onPress={() => this.props.drawerOpen()} />
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;