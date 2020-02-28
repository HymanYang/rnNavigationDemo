import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import OnePage from './OnePage';
import TowPage from './TowPage';
import ThreePage from './ThreePage';
import FourPage from './FourPage';

const BottomTabNavigation = createMaterialBottomTabNavigator({
    OnePage: {
        screen: OnePage,
    },
    TowPage: {
        screen: TowPage,
    },
    ThreePage: {
        screen: ThreePage,
    },
    FourPage: {
        screen: FourPage,
    },
}, {
    initialRouteName: 'OnePage',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
});

const AppContainer = createAppContainer(BottomTabNavigation);

//export default AppContainer;

export default class extends React.Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        return <AppContainer/>;
    }

}



