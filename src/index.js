import React from 'react';
import { LogBox } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/modules/rootReducer';
import ReduxThunk from 'redux-thunk';

let store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

import App from './routes/route';

LogBox.ignoreAllLogs = true;

import '../src/config/StatusBar';

export default function Index() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

