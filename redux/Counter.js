import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';


class Counter extends Component {


    static propTypes = {
        count: PropTypes.number.isRequired,
        hello: PropTypes.string.isRequired,
        onIncreaseClick: PropTypes.func.isRequired,
        onSayHello: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            count: props.count || 0,
            hello: props.hello || '',
        };
    }

    render() {
        const {count, hello, onIncreaseClick, onSayHello} = this.props;
        // console.log(this.props)
        return (
            <View style={{flex: 1, padding: 0}}>

                <View style={{backgroundColor: '#52baff', height: 55, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>测试 Redux 使用</Text>
                </View>

                <View style={{marginBottom: 10, marginTop: 10, paddingLeft: 20, paddingRight: 20}}>
                    <Button style={{}} onPress={onIncreaseClick} title={'Click Me'} color={'#ffb53a'}>Click Me</Button>
                </View>
                <View style={{marginBottom: 4, marginTop: 0, paddingLeft: 20, paddingRight: 20}}>
                    <Button onPress={onSayHello} title={'Say Hello'}>Say Hello</Button>
                </View>
                <View style={{padding: 4}}>
                    <Text>Click Count: {count}</Text>
                    <Text>Say: {hello}</Text>
                </View>
            </View>
        );
    }

}

export default Counter;


