import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import BottomNavigation from "./BottomNavigation";
import MaterialTopTabNavigator from "./MaterialTopTabNavigator";
import TestPage from "./TestPage";


const AppStackNav = createStackNavigator({
    TowTab: MaterialTopTabNavigator,
    Main: BottomNavigation,
    Test: TestPage,
});


const AppSwitchNav = createSwitchNavigator({
    Home: HomePage,
    Login: LoginPage,
    StackNav: AppStackNav,
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppSwitchNav);
