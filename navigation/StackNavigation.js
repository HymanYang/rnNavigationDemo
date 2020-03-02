import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';

import {TopPage01, TopPage02, TopPage03} from './MaterialTopTabNavigator';
import TestPage from './TestPage';


import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import OnePage from './OnePage';
import TowPage from './TowPage';
import ThreePage from './ThreePage';
import FourPage from './FourPage';
import LayoutAnimation from './LayoutAnimation';

let deviceWidth = Dimensions.get('window').width;


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
        },
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
        },
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
        },
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
        },
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
        },
    },
});


/**
 * 标签导航
 */
const TopTabNavigator = createMaterialTopTabNavigator({
    topPage1: {
        screen: TopPage01,
        navigationOptions: {
            tabBarLabel: '已完成',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_main_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
    },
    topPage2: {
        screen: TopPage02,
        navigationOptions: {
            tabBarLabel: '审核中',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_shop_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
    },
    topPage3: {
        screen: TopPage03,
        navigationOptions: {
            tabBarLabel: '全部',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('.././images/tab_mine_check_vip.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
    },
}, {
    tabBarPosition: 'top',       //标签栏在屏幕顶部还是底部
    //swipeEnabled:false,           //是否可以滑动切换标签
    backBehavior: 'history',         //andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
    lazy: true,                    //是否只渲染显示的标签
    animationEnabled: true,         //标签切换是否有动画效果
    tabBarOptions: {
        activeTintColor: '#ff2911',  //标签栏激活字体颜色
        inactiveTintColor: '#000000',//标签栏未激活字体颜色
        showLabel: true,             //是否显示标签栏
        labelStyle: {
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },  //标签样式(可设置字体大小等)
        iconStyle: {//图标的样式
            marginBottom: 5,
            marginTop: 5,
        },
        showIcon: true,              //是否显示标签栏上图标
        scrollEnabled: true,        //是否可以滚动标签栏目(当tab总数超过一屏)
        indicatorStyle: {
            height: 2,
            backgroundColor: '#ff2911',
        }, //指示器样式 height：0则不显示
        style: {
            backgroundColor: '#ffffff',
            height: 55,
            width: deviceWidth,
        }, //设置整个tabbar样式(背景颜色等)
        tabStyle: {
            backgroundColor: '#ffffff',
            height: 53,
            width: deviceWidth / 3,
        },//设置单个tabbar样式
    },
});


const AppStackNav = createStackNavigator({
    TowTab: {
        screen: TopTabNavigator,
        navigationOptions: {
            header: null,
        },
    },
    Main: {
        screen: BottomTabNavigation,
        navigationOptions: {
            header: null,
        },
    },
    LayoutAni: LayoutAnimation,
    Test: TestPage,
}, {
    initialRouteName: 'TowTab',
});


const AppSwitchNav = createSwitchNavigator({
    Home: WelcomePage,
    Login: LoginPage,
    StackNav: AppStackNav,
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppSwitchNav);
