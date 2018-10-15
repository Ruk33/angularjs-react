import { createStore, combineReducers } from 'redux';
import { reducer } from './component/input-component/input-component-reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const buildStore = () => {
    const reducers = combineReducers({
        'inputComponentState': reducer
    } as any);

    return createStore(reducers, devToolsEnhancer());
};
