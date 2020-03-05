// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';
import Counter from '../Counter';
import increaseAction from '.././actions/increase';
import sayHelloAction from '.././actions/hello';

// Map Redux State to component props
const mapStateToProps = state => {
    // console.log(state, 123)
    return {
        count: state.counter.count,
        hello: state.counter.hello,
    };
};
// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        onIncreaseClick: () => {
            dispatch(increaseAction);
        },
        onSayHello: () => {
            dispatch(sayHelloAction);
        },
    };
};
// Connect component
const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

export default App;
