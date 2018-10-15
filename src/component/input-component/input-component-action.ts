import { ActionUnion } from '../../helper/action-creator/action-creator';

export enum ActionType {
    CHANGE = 'INPUT_COMPONENT_ACTION_CHANGE'
};

export const Action = {
    change: (value: string) => ({ type: ActionType.CHANGE, payload: { value } })
};

export type Action = ActionUnion<typeof Action>;
