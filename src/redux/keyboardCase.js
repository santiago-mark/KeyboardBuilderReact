import { KEYBOARDCASE } from "../shared/keyboardCase";
import * as ActionTypes from './ActionTypes';

export const KeyboardCase = (state = KEYBOARDCASE, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_KEYBOARDCASE:
            return {...state, keyboardCase: action.payload};
        default:
            return state;
    }
};