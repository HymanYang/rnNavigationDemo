import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

export default class HomePage extends React.Component {


    static navigationOptions = {
        header: null,
    };

    _closeBackView() {
        //然后设置新路由的第0个路由为home
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'}),
            ],
        });
        // 执行重置路由方法
        this.props.navigation.dispatch(resetAction);
    }

    componentDidMount(): void {

        //自定切换到下一个页面
        setTimeout(() => {
            //this._closeBackView();
        }, 2000);

    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Login');

                    //this._closeBackView();

                }}>
                    <Text style={{color: 'red', fontSize: 34}}>模拟欢迎页面</Text>

                </TouchableOpacity>

                <Text style={{color: 'red', fontSize: 30, marginTop: 10}}>Navigation welcome yours ...</Text>
            </View>
        );
    }


}
