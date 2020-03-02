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
} from 'react-native';

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;


export default class AniDemo3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            w: 200,
            h: 20,
        };
    }


    _onPress() {
        LayoutAnimation.configureNext({
            duration: 700,   //持续时间
            create: {
                type: 'linear',
                property: 'opacity',
            },
            update: {
                type: 'spring',
                springDamping: 0.4,
            },
        });
        this.setState({w: this.state.w + 30, h: this.state.h + 30});
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.content, {width: this.state.w, height: this.state.h}]}>
                    <Text style={[{textAlign: 'center'}]}>Hi, here is VaJoy</Text>
                </View>
                <TouchableOpacity onPress={this._onPress}>
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
        },

        button: {
            padding: 5,
            marginTop: 3,
        },
        buttonText: {
            backgroundColor: 'black',
            color: 'white',
            fontSize: 20,
        },
    })
;
