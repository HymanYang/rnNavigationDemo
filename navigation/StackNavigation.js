import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OnePage from './OnePage';
import HomePage from './HomePage';
import TowPage from './TowPage';
import ThreePage from './ThreePage';
import FourPage from './FourPage';

const AppStackNav = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    OnePage: {
        screen: OnePage,
    }, TowPage: {
        screen: TowPage,
    },
    ThreePage: {
        screen: ThreePage,
    }, FourPage: {
        screen: FourPage,
    },
});

export default createAppContainer(AppStackNav);
