// import React, {Component} from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     Dimensions,
//     LayoutAnimation,
//     NativeModules,
// } from 'react-native';
//
// var screenW = Dimensions.get('window').width;
// var screenH = Dimensions.get('window').height;
//
// export default class LayoutAn extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             width: 100,
//             height: 150,
//             left: 20,
//             top: 20,
//         };
//     }
//
//     _clickStartAnimation() {
//         LayoutAnimation.configureNext({
//             duration: 1000,   //持续时间
//             create: {
//                 type: LayoutAnimation.Types.spring,
//                 property: 'opacity',
//             },
//             update: {
//                 type: 'spring',
//                 springDamping: 0.4,
//             },
//         });
//         this.setState({
//             width: this.state.width + 40,
//             height: this.state.height + 60,
//             left: this.state.left + 20,
//             top: this.state.top + 50,
//         });
//     }
//
//     render() {
//         return (
//             <View style={styles.mainStyle}>
//
//                 <Image style={{
//                     width: this.state.width,
//                     height: this.state.height,
//                     position: 'absolute',
//                     left: this.state.left,
//                     top: this.state.top,
//                 }}
//                        source={require('.././images/20200302152747.jpg')}>
//                 </Image>
//
//                 <TouchableOpacity style={{width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40}}
//                                   onPress={this._clickStartAnimation.bind(this)}>
//                     <Text style={{width: 200, height: 50, textAlign: 'center', lineHeight: 50}}>点击开始动画</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
//
//
// const styles = StyleSheet.create({
//     flex: 1,
// });


import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
    state = {
        w: 100,
        h: 100,
    };

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
       
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
