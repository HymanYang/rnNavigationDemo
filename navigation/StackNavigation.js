import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
// import BottomNavigation from "./BottomNavigation";
import MaterialTopTabNavigator from "./MaterialTopTabNavigator";
import TestPage from "./TestPage";


import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
//import LogoNodejs from 'react-ionicons/lib/LogoNodejs'

import OnePage from './OnePage';
import TowPage from './TowPage';
import ThreePage from './ThreePage';
import FourPage from './FourPage';


const BottomTabNavigation = createBottomTabNavigator({
    OnePage: {
        screen: OnePage,
        navigationOptions: {
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '主页',
            tabBarIcon: ({focused, tintColor}) => {
                let img = focused ? '.././images/tab_main_check_vip.png' : '.././images/tab_main_nocheck_vip.png';
                return (<Image
                    source={require('.././images/tab_main_nocheck_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>);
            },
        }
    },
    TowPage: {
        screen: TowPage,
        navigationOptions: {
            tabBarLabel: '活动',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_found_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },
    ThreePage: {
        screen: ThreePage,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_cart_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },
    FourPage: {
        screen: FourPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_mine_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },
}, {
    initialRouteName: 'OnePage',
    //是否在更改标签时显示动画
    // animationEnabled: true,
    //是否允许在标签之间进行滑动
    // swipeEnabled: true,
    //tab间的类fragment配置
    backBehavior: 'none',
    tabBarOptions: {
        //共有属性
        showIcon: true,//是否显示图标，默认开启
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },

        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});


const AppStackNav = createStackNavigator({
    TowTab: MaterialTopTabNavigator,
    Main: {
        screen: BottomTabNavigation,
        navigationOptions: {
            header: null,
        }
    },
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
