import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,
    NativeModules,
    Easing,
    LayoutAnimation,
    UIManager,
} from 'react-native';

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

const uiM = UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AniDemo3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showNewOne: false,
            w: 200,
            h: 20,
        };
    }


    _onPress() {
        LayoutAnimation.configureNext({
            duration: 1200,   //持续时间
            create: {
                type: 'linear',
                property: 'opacity',
            },
            update: {
                type: 'spring',
                springDamping: 0.4,
            },
        });
        this.setState({w: this.state.w + 30, h: this.state.h + 30, showNewOne : true});
    };


    render() {

        var newOne = this.state.showNewOne ? (
            <View style={[styles.content, {width: this.state.w, height: this.state.h}]}>
                <Text style={[{textAlign: 'center'}]}>new one</Text>
            </View>
        ) : null;

        return (
            <View style={styles.container}>
                <View style={[styles.content, {width: this.state.w, height: this.state.h}]}>
                    <Text style={[{textAlign: 'center'}]}>Hi, here is VaJoy</Text>
                </View>
                {newOne}
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>忽略本按钮</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        },
        content: {
            backgroundColor: 'yellow',
            marginTop: 5,
            padding: 20,
            justifyContent: 'center',
        },

        button: {
            padding: 15,
            marginTop: 13,
        },
        buttonText: {
            backgroundColor: 'black',
            color: 'white',
            fontSize: 20,
            margin: 10,
        },
    })
;
