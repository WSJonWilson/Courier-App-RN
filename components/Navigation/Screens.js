import { Navigation } from 'react-native-navigation';
import {StackNavigator} from 'react-navigation';

import Screen1 from './Dashboard/DrawScreen1';
import Screen2 from './Dashboard/DrawScreen2';
import Login from './Login/Login';
import Home from './Dashboard/Home';

const RootApp = StackNavigator({
    Home: { screen: Home},
    Login: { screen: Login},
    SCreen1: { screen: SCreen1},
    SCreen2: { screen: SCreen2}

});

AppRegistry. registerComponent('RootScreen', () => RootApp);