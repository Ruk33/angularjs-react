import { connect } from 'react-redux';
import { InputComponent } from './input-component';
import { Action } from './input-component-action';

export const InputComponentConnected = connect(
    (state: any) => ({
        value: state.inputComponentState.value
    }), 
    {
        onChange: Action.change
    })(InputComponent);
