import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './views/App';
import reducers from './reducers/index';

// store
const store = createStore(reducers);

export default class IndexR extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
};


