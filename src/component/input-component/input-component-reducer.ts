import { Action, ActionType } from './input-component-action';

export type InputComponentState = {
    value: string
};

const initialState: InputComponentState = {
    value: ''
};

export const reducer = (state: InputComponentState = initialState, action: Action): InputComponentState => {
    switch (action.type) {
        case ActionType.CHANGE:
            return { ...state, value: action.payload.value };
        default:
            return state;
    }
}
