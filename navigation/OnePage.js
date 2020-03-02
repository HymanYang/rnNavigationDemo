import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';


let deviceWidth = Dimensions.get('window').width;


export default class HomePage extends React.Component {

    // static navigationOptions = {
    //     header: null,
    // }

    _titleBar() {
        return (<View style={{
            height: 44,
            width: deviceWidth,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{fontSize: 20}}>首页面</Text>
        </View>);
    }

    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>

                {this._titleBar()}

                <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => {
                        this.props.navigation.navigate('TowTab');
                    }}>
                    <Text style={styleSheet.text}>二级Tab页面</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => {
                        this.props.navigation.navigate('Test');
                    }}
                >
                    <Text style={styleSheet.text}>测试页页面</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => {
                        this.props.navigation.navigate('LayoutAni');
                    }}
                >
                    <Text style={styleSheet.text}>动画、页页面</Text>
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'red', fontSize: 34}}>模拟首页面-数据</Text>
                </View>
            </View>
        );
    }


}

const styleSheet = StyleSheet.create({

    text: {
        marginTop: 20,
        marginLeft: 40,
        padding: 10,
        backgroundColor: '#ffc033',
        fontSize: 18,
        marginRight: 40,
    },

});
