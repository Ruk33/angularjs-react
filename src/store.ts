import { createStore, combineReducers } from 'redux';
import { reducer } from './component/input-component/input-component-reducer';

export const buildStore = () => {
    return createStore(combineReducers({
        'inputComponentState': reducer
    } as any));
};
