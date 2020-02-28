import React from 'react';
import {View, Text} from 'react-native';

export default class HomePage extends React.Component {

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'red', fontSize: 34}}>第三个-个页面</Text>
            </View>
        );
    }


}
