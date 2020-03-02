import React from 'react';
import {View, Text, TouchableOpacity, Alert, Dimensions, Image} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


export default class WelcomePage extends React.Component {


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

    _autoNextView() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve('Login');
            }, 1000 * 40);
        });
    }

    componentDidMount(): void {

        //自定切换到下一个页面
        // this._autoNextView().then(res => {
        //     console.log('promise=s===' + res);
        //     this.props.navigation.navigate(res);
        // }).catch(e => {
        //     console.log('promise=e===' + e);
        // });

        // setTimeout(() => {
        //     this.props.navigation.navigate('Login');
        // }, 4 * 1000);

    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Login');
                }}>
                    <Image
                        source={require('.././images/a266e365a280fd5f7a0a55a308135b0.jpg')}

                        resizeMode={'stretch'}

                        style={[{width: deviceWidth, flex: 1}]}/>

                </TouchableOpacity>


                <Text style={{
                    color: 'red',
                    fontSize: 34,
                    position: 'absolute',
                    marginTop: deviceHeight / 2,
                    marginLeft: deviceWidth / 3,
                }}>模拟欢迎页面</Text>


                {/*<Text style={{color: 'red', fontSize: 30, marginTop: 10}}>Navigation welcome yours ...</Text>*/}
            </View>
        );
    }


}
