import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchIngredients } from './store/sagas/index';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchIngredients)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
