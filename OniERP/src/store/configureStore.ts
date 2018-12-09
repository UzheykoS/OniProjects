import { createStore, applyMiddleware, AnyAction, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import { Check, ProfilesEnum } from '../utils/types';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}