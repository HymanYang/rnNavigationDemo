import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

let deviceWidth = Dimensions.get('window').width;


export class TopPage01 extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity  onPress={()=>{
                    this.props.navigation.navigate('Test');
                }}>
                    <Text>
                        Top page 001
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export class TopPage02 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Top page 002
                </Text>
            </View>
        );
    }
}

export class TopPage03 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Top page 003
                </Text>
            </View>
        );
    }
}


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
        }
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
        }
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
        }
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
            backgroundColor: '#ff2911'
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
    }
});

// const TopTabNavigation = createAppContainer(TopTabNavigator);
//export default appTopTabNavigation;
// export default class extends React.Component {
//
//     static navigationOptions = {
//         header: null,
//     }
//
//     render() {
//         return <TopTabNavigation/>;
//     }
//
// }
//

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
