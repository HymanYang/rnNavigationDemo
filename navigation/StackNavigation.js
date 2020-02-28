import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

import BottomNavigation from "./BottomNavigation";


const AppStackNav = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    Login: {
        screen: LoginPage,
    },
    Main: {
        screen: BottomNavigation
    }
}, {
    initialRouteName: 'Home',
    headerMode: 'screen',
});


export default createAppContainer(AppStackNav);
