import React from 'react';
import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';


export default class LoginPage extends React.Component {

    static navigationOptions = {
        //header: null,
        headerTitle: <TextInput placeholder={'请输入搜索内容-测试标题'}/>,
        headerStyle: {backgroundColor: '#0086f1'},
    };

    componentWillMount() {
        // this.props.navigation
        //this.props.navigation.dispatch();

        //this._closeBackView();
    }

    componentDidMount() {


    }




    render() {


        return (

            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Main');
                }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: 'red', fontSize: 34}}>模拟登陆页面</Text>
                        <Text style={{color: 'red', fontSize: 30}}>点击</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('TowTab');
                }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: 'red', fontSize: 34}}>二级tab入口</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack();
                    //this._closeBackView();
                }}>
                    <View>
                        <Text style={{fontSize: 24, marginTop: 20}}>返回上一页面</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
            ;
    }


}
