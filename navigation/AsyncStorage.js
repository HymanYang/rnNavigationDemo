import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';

export default class AsyncStorageDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            StrorageValue: '初始化数据',
        };
    }


    _testStorage() {
        let UID123_object = {
            name: 'Chris',
            age: 30,
            traits: {hair: 'brown', eyes: 'brown'},
        };
        // 只需定义新增或是修改的数据
        let UID123_delta = {
            age: 31,
            traits: {eyes: 'blue', shoe_size: 10},
        };

        AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {

            AsyncStorage.getItem('UID123', (err, result) => {
                console.log('one: ' + result);
            });

            AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
                AsyncStorage.getItem('UID123', (err, result) => {
                    console.log('one-2: ' + result);
                });
            });
        });

    }


    render() {

        this._testStorage();

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>`当期数据：${this.state.StrorageValue}`</Text>
            </View>
        );
    }
};
