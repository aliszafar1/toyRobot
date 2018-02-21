import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(logger));
}