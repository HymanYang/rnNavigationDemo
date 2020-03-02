import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FadeInView from './FadeInView';

export default class TestPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startAni: 0,
        };
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}
                            startAni={this.state.startAni}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            startAni: 1,
                        });
                    }}
                >
                    <Text style={{color: 'red', fontSize: 34}}>Test-个页面</Text>
                </TouchableOpacity>
            </View>
        );
    }


}
