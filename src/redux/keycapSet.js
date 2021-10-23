import { KEYCAPSET } from "../shared/keycapSet";
import * as ActionTypes from './ActionTypes'
/*
export const KeycapSet = (state = KEYCAPSET, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_KEYCAPSETS:
            return null
        case ActionTypes.SET_KEYCAPSET:
            return null
        default:
            return state;
    }
};
*/

export const KeycapSet = (state = KEYCAPSET, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_KEYCAPSETS:
            return { ...state, keycapSet: action.payload }
        case ActionTypes.SET_KEYCAPSET:
            return {...state, ...action.payload}
        default:
            return state;
    }
};